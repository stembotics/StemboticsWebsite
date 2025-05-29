import { v as verifyToken, d as db } from '../../chunks/auth_C2fVUnyh.mjs';
import Stripe from 'stripe';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16"
});
const POST = async ({ request, cookies }) => {
  try {
    const token = cookies.get("token");
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401
      });
    }
    const user = verifyToken(token.value);
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid token" }), {
        status: 401
      });
    }
    const cartResult = await db.execute({
      sql: `
        SELECT 
          ci.id,
          ci.quantity,
          p.id as product_id,
          p.name,
          p.price,
          p.stripe_price_id,
          p.stock,
          sc.id as cart_id
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        JOIN shopping_carts sc ON ci.cart_id = sc.id
        JOIN users u ON sc.user_id = u.id
        WHERE u.id = ?
      `,
      args: [user.userId]
    });
    if (!cartResult.rows.length) {
      return new Response(JSON.stringify({ error: "Cart is empty" }), {
        status: 400
      });
    }
    for (const item of cartResult.rows) {
      const stock = parseInt(String(item.stock || "0"));
      const quantity = parseInt(String(item.quantity || "0"));
      if (stock < quantity) {
        return new Response(JSON.stringify({
          error: `Not enough stock available for ${item.name}`
        }), {
          status: 400
        });
      }
    }
    const lineItems = cartResult.rows.map((item) => ({
      price: item.stripe_price_id,
      quantity: item.quantity
    }));
    const totalAmount = cartResult.rows.reduce((total, item) => {
      return total + parseFloat(String(item.price)) * parseInt(String(item.quantity));
    }, 0);
    const origin = request.headers.get("origin") || "http://localhost:3000";
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      customer_email: user.email,
      metadata: {
        userId: user.userId,
        cartId: cartResult.rows[0].cart_id
      }
    });
    await db.execute({
      sql: `
        INSERT INTO orders (
          user_id, 
          stripe_session_id, 
          status, 
          total_amount
        ) VALUES (?, ?, 'pending', ?)
      `,
      args: [user.userId, checkoutSession.id, totalAmount]
    });
    for (const item of cartResult.rows) {
      await db.execute({
        sql: `
          INSERT INTO order_items (
            order_id,
            product_id,
            quantity,
            price_at_time
          ) VALUES (
            (SELECT id FROM orders WHERE stripe_session_id = ?),
            ?,
            ?,
            ?
          )
        `,
        args: [
          checkoutSession.id,
          item.product_id,
          item.quantity,
          item.price
        ]
      });
    }
    return new Response(JSON.stringify({ url: checkoutSession.url }), {
      status: 200
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(JSON.stringify({ error: "Failed to create checkout session" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
