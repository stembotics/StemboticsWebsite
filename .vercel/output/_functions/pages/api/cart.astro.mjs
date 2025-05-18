import { v as verifyToken, d as db } from '../../chunks/auth_DuCNQg1W.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const GET = async ({ request, cookies }) => {
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
    let cart = await db.execute({
      sql: "SELECT id FROM shopping_carts WHERE user_id = ?",
      args: [user.userId]
    });
    let cartId;
    if (cart.rows.length === 0) {
      const result = await db.execute({
        sql: "INSERT INTO shopping_carts (user_id) VALUES (?) RETURNING id",
        args: [user.userId]
      });
      console.log("result");
      cartId = result.rows[0].id;
    } else {
      cartId = cart.rows[0].id;
    }
    const cartItems = await db.execute({
      sql: `
        SELECT 
          ci.id,
          ci.quantity,
          p.id as product_id,
          p.name,
          p.price,
          p.stripe_price_id,
          pi.url as image_url
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.display_order = 0
        WHERE ci.cart_id = ?
      `,
      args: [cartId]
    });
    return new Response(JSON.stringify({ items: cartItems.rows }), {
      status: 200
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500
    });
  }
};
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
    const { productId, quantity = 1 } = await request.json();
    let cart = await db.execute({
      sql: "SELECT id FROM shopping_carts WHERE user_id = ?",
      args: [user.userId]
    });
    let cartId;
    if (cart.rows.length === 0) {
      const result = await db.execute({
        sql: "INSERT INTO shopping_carts (user_id) VALUES (?) RETURNING id",
        args: [user.userId]
      });
      cartId = result.rows[0].id;
    } else {
      cartId = cart.rows[0].id;
    }
    const existingItem = await db.execute({
      sql: "SELECT id, quantity FROM cart_items WHERE cart_id = ? AND product_id = ?",
      args: [cartId, productId]
    });
    if (existingItem.rows.length > 0) {
      await db.execute({
        sql: "UPDATE cart_items SET quantity = quantity + ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
        args: [quantity, existingItem.rows[0].id]
      });
    } else {
      await db.execute({
        sql: "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)",
        args: [cartId, productId, quantity]
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500
    });
  }
};
const PUT = async ({ request, cookies }) => {
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
    const { itemId, quantity } = await request.json();
    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity < 0) {
      return new Response(JSON.stringify({ error: "Invalid quantity" }), {
        status: 400
      });
    }
    const itemResult = await db.execute({
      sql: `
        SELECT ci.*, p.stock 
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        WHERE ci.id = ? AND ci.cart_id IN (
          SELECT id FROM shopping_carts WHERE user_id = ?
        )
      `,
      args: [itemId, user.userId]
    });
    if (itemResult.rows.length === 0) {
      return new Response(JSON.stringify({ error: "Item not found in cart" }), {
        status: 404
      });
    }
    const item = itemResult.rows[0];
    const stock = parseInt(String(item.stock || "0"));
    if (parsedQuantity > stock) {
      return new Response(JSON.stringify({ error: "Not enough stock available" }), {
        status: 400
      });
    }
    if (parsedQuantity === 0) {
      await db.execute({
        sql: "DELETE FROM cart_items WHERE id = ?",
        args: [itemId]
      });
    } else {
      await db.execute({
        sql: "UPDATE cart_items SET quantity = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
        args: [parsedQuantity, itemId]
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (error) {
    console.error("Error updating cart:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500
    });
  }
};
const DELETE = async ({ request, cookies }) => {
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
    const { itemId } = await request.json();
    await db.execute({
      sql: "DELETE FROM cart_items WHERE id = ?",
      args: [itemId]
    });
    return new Response(JSON.stringify({ success: true }), {
      status: 200
    });
  } catch (error) {
    console.error("Error removing from cart:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
