/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BzCtafMy.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found", "description": "Sorry, the page you are looking for does not exist." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-custom py-24 text-center"> <h1 class="text-6xl font-bold text-primary-700 mb-4">404</h1> <h2 class="text-2xl font-semibold mb-4">Page Not Found</h2> <p class="text-lg text-slate-600 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p> <a href="/" class="btn-primary px-6 py-3 text-lg">Go to Homepage</a> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/404.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
