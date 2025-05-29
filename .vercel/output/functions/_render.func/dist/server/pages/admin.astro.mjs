/* empty css                                 */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BXRAwln_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_oB6cU0PH.mjs';
import { v as verifyToken, d as db } from '../chunks/auth_C2fVUnyh.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const token = Astro2.cookies.get("token");
  let isAdmin = false;
  let userData = null;
  if (token?.value) {
    try {
      const user = verifyToken(token.value);
      if (user && user.role === "admin") {
        isAdmin = true;
        const result = await db.execute({
          sql: "SELECT first_name, last_name FROM users WHERE id = ?",
          args: [user.userId]
        });
        userData = result.rows[0];
      }
    } catch (error) {
      console.error("Token verification failed:", error);
    }
  }
  if (!isAdmin) {
    return Astro2.redirect("/login?redirect=/admin");
  }
  const stats = await db.execute({
    sql: `
    SELECT 
      (SELECT COUNT(*) FROM users WHERE role = 'student') as student_count,
      (SELECT COUNT(*) FROM users WHERE role = 'teacher') as teacher_count,
      (SELECT COUNT(*) FROM courses) as course_count,
      (SELECT COUNT(*) FROM products) as product_count
  `,
    args: []
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"> <div class="sm:flex sm:items-center"> <div class="sm:flex-auto"> <h1 class="text-3xl font-bold tracking-tight text-gray-900">Admin Dashboard</h1> <p class="mt-2 text-sm text-gray-700">
Welcome back, ${userData?.first_name} ${userData?.last_name} </p> </div> </div> <!-- Stats --> <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"> <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"> <dt class="truncate text-sm font-medium text-gray-500">Total Students</dt> <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">${stats.rows[0].student_count}</dd> </div> <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"> <dt class="truncate text-sm font-medium text-gray-500">Total Teachers</dt> <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">${stats.rows[0].teacher_count}</dd> </div> <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"> <dt class="truncate text-sm font-medium text-gray-500">Active Courses</dt> <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">${stats.rows[0].course_count}</dd> </div> <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"> <dt class="truncate text-sm font-medium text-gray-500">Products</dt> <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">${stats.rows[0].product_count}</dd> </div> </div> <!-- Quick Actions --> <div class="mt-8"> <h2 class="text-lg font-medium text-gray-900">Quick Actions</h2> <div class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"> <a href="/admin/products" class="relative block rounded-lg border border-gray-300 p-6 hover:border-gray-400"> <h3 class="text-base font-semibold text-gray-900">Manage Products</h3> <p class="mt-2 text-sm text-gray-500">Add, edit, or remove products from the store</p> </a> <a href="/admin/attendance" class="relative block rounded-lg border border-gray-300 p-6 hover:border-gray-400"> <h3 class="text-base font-semibold text-gray-900">View Attendance</h3> <p class="mt-2 text-sm text-gray-500">Track student attendance across all courses</p> </a> <a href="/admin/reports" class="relative block rounded-lg border border-gray-300 p-6 hover:border-gray-400"> <h3 class="text-base font-semibold text-gray-900">Reports</h3> <p class="mt-2 text-sm text-gray-500">Generate and view various reports</p> </a> </div> </div> </div> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/index.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
