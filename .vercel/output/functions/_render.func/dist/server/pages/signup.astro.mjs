/* empty css                                 */
import { c as createComponent, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dt5ugNSC.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign Up | Stembotics Academy" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen bg-slate-50 py-12"> <div class="container-custom"> <div class="max-w-md mx-auto"> <div class="bg-white rounded-xl shadow-md overflow-hidden p-8"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold">Create Your Account</h1> <p class="text-slate-600 mt-2">Join Stembotics Academy today</p> </div> <form id="signupForm" class="space-y-4"> <div class="grid grid-cols-2 gap-4"> <div> <label for="firstName" class="block text-sm font-medium text-slate-700 mb-1">First Name</label> <input type="text" id="firstName" name="firstName" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="lastName" class="block text-sm font-medium text-slate-700 mb-1">Last Name</label> <input type="text" id="lastName" name="lastName" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> </div> <div> <label for="email" class="block text-sm font-medium text-slate-700 mb-1">Email Address</label> <input type="email" id="email" name="email" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="password" class="block text-sm font-medium text-slate-700 mb-1">Password</label> <input type="password" id="password" name="password" required minlength="8" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> <p class="mt-1 text-sm text-slate-500">Must be at least 8 characters long</p> </div> <div class="flex items-start"> <input type="checkbox" id="terms" name="terms" required class="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 mt-1"> <label for="terms" class="ml-2 block text-sm text-slate-700">
I agree to the <a href="/terms" class="text-primary-600 hover:text-primary-700">Terms of Service</a> and
<a href="/privacy" class="text-primary-600 hover:text-primary-700">Privacy Policy</a> </label> </div> <div id="errorMessage" class="text-red-600 text-sm hidden"></div> <button type="submit" class="w-full btn-primary py-2">
Create Account
</button> </form> <div class="mt-6 text-center text-sm"> <p class="text-slate-600">
Already have an account?
<a href="/login" class="text-primary-600 hover:text-primary-700 font-medium">Log in</a> </p> <p class="mt-2 text-slate-600">
Want to teach? <a href="/teachers/signup" class="text-primary-600 hover:text-primary-700 font-medium">Apply as a teacher</a> </p> </div> </div> </div> </div> </section> ` })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signup.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signup.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
