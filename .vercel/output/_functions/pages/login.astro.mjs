/* empty css                                 */
import { c as createComponent, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BXRAwln_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dx2vdsDP.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login | Stembotics Academy" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen bg-slate-50 py-12"> <div class="container-custom"> <div class="max-w-md mx-auto"> <div class="bg-white rounded-xl shadow-md overflow-hidden p-8"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold">Welcome Back</h1> <p class="text-slate-600 mt-2">Log in to your Stembotics account</p> </div> <form id="loginForm" class="space-y-4"> <div> <label for="email" class="block text-sm font-medium text-slate-700 mb-1">Email Address</label> <input type="email" id="email" name="email" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="password" class="block text-sm font-medium text-slate-700 mb-1">Password</label> <input type="password" id="password" name="password" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div class="flex items-center justify-between"> <div class="flex items-center"> <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded"> <label for="remember-me" class="ml-2 block text-sm text-slate-700">Remember me</label> </div> </div> <div id="errorMessage" class="text-red-600 text-sm hidden"></div> <button type="submit" class="w-full btn-primary py-2">
Log In
</button> </form> <div class="mt-6 text-center text-sm"> <p class="text-slate-600">
Don't have an account?
<a href="/signup" class="text-primary-600 hover:text-primary-700 font-medium">Sign up</a> </p> </div> </div> </div> </div> </section> ` })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/login.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
