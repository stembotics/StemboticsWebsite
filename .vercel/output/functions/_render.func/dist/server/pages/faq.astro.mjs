/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DY7GRzor.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FAQ | Stembotics Academy", "description": "Frequently asked questions about Stembotics Academy, courses, enrollment, and teaching." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-custom py-16"> <h1 class="text-3xl font-bold mb-6">Frequently Asked Questions</h1> <p class="text-lg text-slate-700 mb-8">Find answers to common questions below.</p> <div class="space-y-6"> <div> <h2 class="text-xl font-semibold">What is Stembotics Academy?</h2> <p class="text-slate-700 mt-2">Stembotics Academy is an online platform offering STEM courses in robotics, coding, AI, and more for students and teachers worldwide.</p> </div> <div> <h2 class="text-xl font-semibold">How do I enroll in a course?</h2> <p class="text-slate-700 mt-2">Simply create an account, browse our courses, and click the "Enroll" button on the course page.</p> </div> <div> <h2 class="text-xl font-semibold">Are there any prerequisites?</h2> <p class="text-slate-700 mt-2">Most beginner courses have no prerequisites. Advanced courses may require prior knowledge, which will be listed in the course description.</p> </div> <div> <h2 class="text-xl font-semibold">Can I become a teacher?</h2> <p class="text-slate-700 mt-2">Yes! If you have expertise in a STEM field and a passion for teaching, visit our "For Teachers" page to apply.</p> </div> <div> <h2 class="text-xl font-semibold">How can I contact support?</h2> <p class="text-slate-700 mt-2">You can reach our support team via the Contact page or by emailing support@stembotics.academy.</p> </div> </div> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/faq.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
