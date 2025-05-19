/* empty css                                    */
import { c as createComponent, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BzCtafMy.mjs';
import { z } from 'zod';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    currentRole: z.string().min(2, "Current role is required"),
    education: z.string().min(2, "Education details are required"),
    experience: z.string().min(2, "Experience details are required"),
    location: z.string().min(2, "Location is required"),
    linkedin: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
    portfolio: z.string().url("Please enter a valid portfolio URL").optional().or(z.literal("")),
    twitter: z.string().url("Please enter a valid Twitter URL").optional().or(z.literal("")),
    github: z.string().url("Please enter a valid GitHub URL").optional().or(z.literal("")),
    youtube: z.string().url("Please enter a valid YouTube URL").optional().or(z.literal("")),
    bio: z.string().min(50, "Bio must be at least 50 characters")
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Teacher Signup" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 py-12"> <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-white rounded-lg shadow-lg p-8"> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-gray-900">Become a Teacher</h1> <p class="mt-2 text-gray-600">Share your knowledge and inspire others</p> </div> <form id="teacherSignupForm" class="space-y-6"> <!-- Personal Information --> <div class="bg-gray-50 p-6 rounded-lg"> <h2 class="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label> <input type="text" id="firstName" name="firstName" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label> <input type="text" id="lastName" name="lastName" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> </div> </div> <!-- Professional Information --> <div class="bg-gray-50 p-6 rounded-lg"> <h2 class="text-xl font-semibold text-gray-900 mb-4">Professional Information</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="currentRole" class="block text-sm font-medium text-gray-700">Current Role</label> <input type="text" id="currentRole" name="currentRole" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="location" class="block text-sm font-medium text-gray-700">Location</label> <input type="text" id="location" name="location" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div class="md:col-span-2"> <label for="education" class="block text-sm font-medium text-gray-700">Education</label> <textarea id="education" name="education" rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea> </div> <div class="md:col-span-2"> <label for="experience" class="block text-sm font-medium text-gray-700">Professional Experience</label> <textarea id="experience" name="experience" rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea> </div> </div> </div> <!-- Social Media Links --> <div class="bg-gray-50 p-6 rounded-lg"> <h2 class="text-xl font-semibold text-gray-900 mb-4">Social Media & Portfolio</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="linkedin" class="block text-sm font-medium text-gray-700">LinkedIn URL</label> <input type="url" id="linkedin" name="linkedin" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="portfolio" class="block text-sm font-medium text-gray-700">Portfolio URL</label> <input type="url" id="portfolio" name="portfolio" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="twitter" class="block text-sm font-medium text-gray-700">Twitter URL</label> <input type="url" id="twitter" name="twitter" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="github" class="block text-sm font-medium text-gray-700">GitHub URL</label> <input type="url" id="github" name="github" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="youtube" class="block text-sm font-medium text-gray-700">YouTube URL</label> <input type="url" id="youtube" name="youtube" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> </div> </div> <!-- Bio --> <div class="bg-gray-50 p-6 rounded-lg"> <h2 class="text-xl font-semibold text-gray-900 mb-4">Bio</h2> <div> <label for="bio" class="block text-sm font-medium text-gray-700">Tell us about yourself</label> <textarea id="bio" name="bio" rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea> </div> </div> <!-- Account Security --> <div class="bg-gray-50 p-6 rounded-lg"> <h2 class="text-xl font-semibold text-gray-900 mb-4">Account Security</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="password" class="block text-sm font-medium text-gray-700">Password</label> <input type="password" id="password" name="password" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> <div> <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label> <input type="password" id="confirmPassword" name="confirmPassword" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"> </div> </div> </div> <div class="flex items-center justify-between"> <div class="text-sm"> <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
Already have an account? Sign in
</a> </div> <button type="submit" class="inline-flex justify-center py-3 px-6 border shadow-sm text-base font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
Submit Application
</button> </div> </form> </div> </div> </div> ` })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/teachers/signup.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/teachers/signup.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/teachers/signup.astro";
const $$url = "/teachers/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
