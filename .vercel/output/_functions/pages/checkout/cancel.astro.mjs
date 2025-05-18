/* empty css                                    */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DvdpRdin.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Cancel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Checkout Cancelled" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> <div class="text-center"> <svg class="mx-auto h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900">Checkout Cancelled</h1> <p class="mt-2 text-base text-gray-500">
Your checkout process was cancelled. No charges were made.
</p> </div> <div class="mt-12 text-center"> <a href="/cart" class="btn-primary">
Return to Cart
</a> </div> </div> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/checkout/cancel.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/checkout/cancel.astro";
const $$url = "/checkout/cancel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cancel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
