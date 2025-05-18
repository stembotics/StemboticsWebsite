/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Dt5ugNSC.mjs';
import { v as verifyToken, d as db } from '../../chunks/auth_DuCNQg1W.mjs';
import Stripe from 'stripe';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Success = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16"
  });
  const sessionId = Astro2.url.searchParams.get("session_id");
  const token = Astro2.cookies.get("token");
  let orderDetails = null;
  let error = null;
  if (sessionId && token) {
    try {
      const user = verifyToken(token.value);
      if (!user) {
        error = "Unauthorized";
      } else {
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        if (session.payment_status === "paid") {
          await db.execute({
            sql: `
            UPDATE orders 
            SET status = 'completed' 
            WHERE stripe_session_id = ? AND user_id = ?
          `,
            args: [sessionId, user.userId]
          });
          const orderItems = await db.execute({
            sql: `
            SELECT oi.product_id, oi.quantity
            FROM order_items oi
            JOIN orders o ON oi.order_id = o.id
            WHERE o.stripe_session_id = ?
          `,
            args: [sessionId]
          });
          for (const item of orderItems.rows) {
            await db.execute({
              sql: `
              UPDATE products 
              SET stock = stock - ? 
              WHERE id = ?
            `,
              args: [item.quantity, item.product_id]
            });
          }
          if (session.metadata?.cartId) {
            await db.execute({
              sql: "DELETE FROM cart_items WHERE cart_id = ?",
              args: [session.metadata.cartId]
            });
          }
          const result = await db.execute({
            sql: `
            SELECT 
              o.id, 
              o.total_amount, 
              o.created_at, 
              oi.quantity, 
              p.name, 
              oi.price_at_time
            FROM orders o
            JOIN order_items oi ON o.id = oi.order_id
            JOIN products p ON oi.product_id = p.id
            WHERE o.stripe_session_id = ?
          `,
            args: [sessionId]
          });
          orderDetails = result.rows;
        } else {
          error = "Payment not completed";
        }
      }
    } catch (err) {
      console.error("Error processing success page:", err);
      error = "Error processing order";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Order Confirmation" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> ${error ? renderTemplate`<div class="text-center"> <svg class="mx-auto h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path> </svg> <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900">Order Error</h1> <p class="mt-2 text-base text-gray-500">${error}</p> <div class="mt-6"> <a href="/cart" class="btn-primary">
Return to Cart
</a> </div> </div>` : renderTemplate`<div> <div class="text-center"> <svg class="mx-auto h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900">Thank you for your order!</h1> <p class="mt-2 text-base text-gray-500">
We've received your order and will begin processing it right away.
</p> </div> ${orderDetails && orderDetails.length > 0 && renderTemplate`<div class="mt-12"> <div class="border-t border-gray-200 pt-8"> <h2 class="text-lg font-medium text-gray-900">Order Details</h2> <dl class="mt-6 space-y-6"> <div class="flex items-center justify-between"> <dt class="text-sm text-gray-600">Order number</dt> <dd class="text-sm font-medium text-gray-900">${orderDetails[0].id}</dd> </div> <div class="flex items-center justify-between"> <dt class="text-sm text-gray-600">Date</dt> <dd class="text-sm font-medium text-gray-900"> ${new Date(orderDetails[0].created_at).toLocaleDateString()} </dd> </div> <div class="flex items-center justify-between"> <dt class="text-sm text-gray-600">Total amount</dt> <dd class="text-sm font-medium text-gray-900">
$${Number(orderDetails[0].total_amount).toFixed(2)} </dd> </div> </dl> </div> <div class="mt-8 border-t border-gray-200 pt-8"> <h2 class="text-lg font-medium text-gray-900">Order Items</h2> <ul role="list" class="mt-6 divide-y divide-gray-200"> ${orderDetails.map((item) => renderTemplate`<li class="flex py-6"> <div class="ml-4 flex flex-1 flex-col"> <div> <div class="flex justify-between text-base font-medium text-gray-900"> <h3>${item.name}</h3> <p class="ml-4">$${(Number(item.price_at_time) * Number(item.quantity)).toFixed(2)}</p> </div> <p class="mt-1 text-sm text-gray-500">Quantity: ${item.quantity}</p> </div> </div> </li>`)} </ul> </div> </div>`} <div class="mt-12 text-center"> <a href="/products" class="btn-primary">
Continue Shopping
</a> </div> </div>`} </div> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/checkout/success.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/checkout/success.astro";
const $$url = "/checkout/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
