/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Bp7qhXuE.mjs';
import { v as verifyToken, d as db } from '../../chunks/auth_AXbtZ2QN.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Attendance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Attendance;
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
    return Astro2.redirect("/login?redirect=/admin/attendance");
  }
  const courses = await db.execute({
    sql: `
    SELECT 
      c.id,
      c.title as course_name,
      t.first_name as teacher_first_name,
      t.last_name as teacher_last_name,
      COUNT(DISTINCT e.user_id) as total_students,
      COUNT(DISTINCT sa.id) as total_attendance_records
    FROM courses c
    LEFT JOIN users t ON c.instructor_id = t.id
    LEFT JOIN enrollments e ON c.id = e.course_id
    LEFT JOIN class_sessions s ON c.id = s.course_id
    LEFT JOIN class_attendance sa ON s.id = sa.class_id
    GROUP BY c.id
    ORDER BY c.title
  `,
    args: []
  });
  const attendanceRecords = await db.execute({
    sql: `
    SELECT 
      sa.id,
      s.session_date as session_date,
      sa.status,
      c.title as course_name,
      u.first_name as student_first_name,
      u.last_name as student_last_name
    FROM class_attendance sa
    JOIN class_sessions s ON sa.class_id = s.id
    JOIN courses c ON s.course_id = c.id
    JOIN users u ON sa.student_id = u.id
    WHERE s.session_date >= date('now', '-30 days')
    ORDER BY s.session_date DESC, c.title, u.last_name, u.first_name
  `,
    args: []
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Attendance Overview" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"> <div class="sm:flex sm:items-center"> <div class="sm:flex-auto"> <h1 class="text-3xl font-bold tracking-tight text-gray-900">Attendance Overview</h1> <p class="mt-2 text-sm text-gray-700">
View attendance records for all courses
</p> </div> </div> <!-- Course Summary --> <div class="mt-8"> <h2 class="text-lg font-medium text-gray-900">Course Summary</h2> <div class="mt-4 flow-root"> <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> <table class="min-w-full divide-y divide-gray-300"> <thead> <tr> <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Course</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Teacher</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total Students</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Attendance Records</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${courses.rows.map((course) => renderTemplate`<tr> <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"> ${course.course_name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${course.teacher_first_name} ${course.teacher_last_name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${course.total_students} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${course.total_attendance_records} </td> </tr>`)} </tbody> </table> </div> </div> </div> </div> <!-- Recent Attendance Records --> <div class="mt-8"> <h2 class="text-lg font-medium text-gray-900">Recent Attendance Records (Last 30 Days)</h2> <div class="mt-4 flow-root"> <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> <table class="min-w-full divide-y divide-gray-300"> <thead> <tr> <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Date</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Course</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Student</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${attendanceRecords.rows.map((record) => renderTemplate`<tr> <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"> ${new Date(record.session_date).toLocaleDateString()} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${record.course_name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${record.student_first_name} ${record.student_last_name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> <span${addAttribute(`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${record.status === "completed" ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20" : record.status === "missed" ? "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20" : "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20"}`, "class")}> ${typeof record.status === "string" ? record.status.charAt(0).toUpperCase() + record.status.slice(1) : "Unknown"} </span> </td> </tr>`)} </tbody> </table> </div> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/attendance.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/attendance.astro";
const $$url = "/admin/attendance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Attendance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
