/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BXRAwln_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_oB6cU0PH.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Resources = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources | Stembotics Academy", "description": "A curated list of STEM resources, links, and materials for students and teachers at Stembotics Academy." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-custom py-16"> <h1 class="text-3xl font-bold mb-6">Resources</h1> <p class="text-lg text-slate-700 mb-8">Find helpful resources and materials here.</p> <ul class="list-disc pl-6 space-y-2"> <li><a href="https://www.khanacademy.org/" target="_blank" class="text-primary-600 hover:underline">Khan Academy</a> – Free online courses, lessons, and practice.</li> <li><a href="https://www.coursera.org/" target="_blank" class="text-primary-600 hover:underline">Coursera</a> – Online courses from top universities.</li> <li><a href="https://www.codecademy.com/" target="_blank" class="text-primary-600 hover:underline">Codecademy</a> – Learn to code interactively.</li> <li><a href="https://www.nasa.gov/stem" target="_blank" class="text-primary-600 hover:underline">NASA STEM</a> – STEM resources from NASA.</li> <li><a href="https://www.sciencebuddies.org/" target="_blank" class="text-primary-600 hover:underline">Science Buddies</a> – Science fair project ideas and STEM activities.</li> </ul> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/resources.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/resources.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resources,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
