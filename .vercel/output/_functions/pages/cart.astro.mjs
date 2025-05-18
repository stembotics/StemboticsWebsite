/* empty css                                 */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DvdpRdin.mjs';
import { v as verifyToken } from '../chunks/auth_H6y_H1li.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Cart$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cart$1;
  const token = Astro2.cookies.get("token");
  if (token) {
    verifyToken(token.value);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shopping Cart" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> <h1 class="text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1> <div id="cart-items" class="mt-8"> <!-- Cart items will be loaded here --> <div class="text-center py-12"> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div> <p class="mt-4 text-gray-500">Loading cart...</p> </div> </div> <div id="empty-cart" class="hidden mt-8 text-center"> <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> <h3 class="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3> <p class="mt-1 text-sm text-gray-500">Start adding some items to your cart!</p> <div class="mt-6"> <a href="/products" class="btn-primary">
Browse Products
</a> </div> </div> <div id="cart-summary" class="hidden mt-8 border-t border-gray-200 pt-8"> <div class="flex justify-between text-base font-medium text-gray-900"> <p>Subtotal</p> <p id="cart-subtotal">$0.00</p> </div> <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> <div class="mt-6"> <button id="checkout-button" class="w-full btn-primary" disabled>
Checkout
</button> </div> <div class="mt-6 flex justify-center text-center text-sm text-gray-500"> <p>
or
<a href="/products" class="font-medium text-primary-600 hover:text-primary-500">
Continue Shopping
<span aria-hidden="true"> &rarr;</span> </a> </p> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/Cart.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/Cart.astro", void 0);

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CartComponent", $$Cart$1, {})}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/cart.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
