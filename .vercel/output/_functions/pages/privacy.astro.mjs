/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DvdpRdin.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy | Stembotics Academy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container-custom py-16"> <h1 class="text-3xl font-bold mb-6">Privacy Policy</h1> <p class="text-lg text-slate-700 mb-8">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p> <h2 class="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2> <p class="mb-4">We collect information you provide when you register, enroll in courses, or contact us. This may include your name, email, and course activity.</p> <h2 class="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2> <p class="mb-4">We use your information to provide and improve our services, communicate with you, and personalize your experience.</p> <h2 class="text-xl font-semibold mt-8 mb-2">3. Data Security</h2> <p class="mb-4">We implement security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p> <h2 class="text-xl font-semibold mt-8 mb-2">4. Sharing of Information</h2> <p class="mb-4">We do not sell or rent your personal information. We may share data with trusted partners to help us operate our site and deliver services.</p> <h2 class="text-xl font-semibold mt-8 mb-2">5. Cookies</h2> <p class="mb-4">We use cookies to enhance your experience. You can disable cookies in your browser settings, but some features may not work properly.</p> <h2 class="text-xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2> <p class="mb-4">We may update this policy from time to time. Changes will be posted on this page.</p> <h2 class="text-xl font-semibold mt-8 mb-2">7. Contact</h2> <p>If you have any questions about this privacy policy, please contact us at support@stembotics.academy.</p> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/privacy.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
