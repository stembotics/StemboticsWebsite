/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B7JUAGmR.mjs';
import { v as verifyToken, d as db } from '../../chunks/auth_t-EhPplD.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Reports = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reports;
  const token = Astro2.cookies.get("token");
  let isAdmin = false;
  if (token) {
    const user = verifyToken(token.value);
    if (user && user.role === "admin") {
      isAdmin = true;
      const result = await db.execute({
        sql: "SELECT first_name, last_name FROM users WHERE id = ?",
        args: [user.userId]
      });
      result.rows[0];
    }
  }
  if (!isAdmin) {
    return Astro2.redirect("/login");
  }
  const enrollmentStats = await db.execute({
    sql: `
    SELECT 
      c.title as course_name,
      COUNT(DISTINCT e.user_id) as total_enrollments,
      COUNT(DISTINCT CASE WHEN ca.status = 'completed' THEN ca.student_id END) as present_count,
      COUNT(DISTINCT CASE WHEN ca.status = 'missed' THEN ca.student_id END) as absent_count,
      COUNT(DISTINCT CASE WHEN ca.status = 'pending' THEN ca.student_id END) as late_count
    FROM courses c
    LEFT JOIN enrollments e ON c.id = e.course_id
    LEFT JOIN class_sessions s ON c.id = s.course_id
    LEFT JOIN class_attendance ca ON s.id = ca.session_id
    GROUP BY c.id
    ORDER BY c.title
  `,
    args: []
  });
  const studentPerformance = await db.execute({
    sql: `
    SELECT 
      c.title as course_name,
      s.first_name,
      s.last_name,
      COUNT(DISTINCT ca.id) as total_attendance,
      COUNT(DISTINCT CASE WHEN ca.status = 'completed' THEN ca.id END) as present_count,
      ROUND(CAST(COUNT(DISTINCT CASE WHEN ca.status = 'completed' THEN ca.id END) AS FLOAT) / 
            NULLIF(COUNT(DISTINCT ca.id), 0) * 100, 2) as attendance_rate
    FROM courses c
    JOIN enrollments e ON c.id = e.course_id
    JOIN users s ON e.user_id = s.id
    LEFT JOIN class_sessions cs ON c.id = cs.course_id
    LEFT JOIN class_attendance ca ON cs.id = ca.session_id AND s.id = ca.student_id
    GROUP BY c.id, s.id
    ORDER BY c.title, s.last_name, s.first_name
  `,
    args: []
  });
  const teacherPerformance = await db.execute({
    sql: `
    SELECT 
      t.first_name,
      t.last_name,
      COUNT(DISTINCT c.id) as total_courses,
      COUNT(DISTINCT e.user_id) as total_students,
      COUNT(DISTINCT ca.id) as total_attendance_records,
      ROUND(CAST(COUNT(DISTINCT CASE WHEN ca.status = 'completed' THEN ca.id END) AS FLOAT) / 
            NULLIF(COUNT(DISTINCT ca.id), 0) * 100, 2) as overall_attendance_rate
    FROM users t
    LEFT JOIN courses c ON t.id = c.instructor_id
    LEFT JOIN enrollments e ON c.id = e.course_id
    LEFT JOIN class_sessions s ON c.id = s.course_id
    LEFT JOIN class_attendance ca ON s.id = ca.session_id
    WHERE t.role = 'teacher'
    GROUP BY t.id
    ORDER BY t.last_name, t.first_name
  `,
    args: []
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Reports" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"> <div class="sm:flex sm:items-center"> <div class="sm:flex-auto"> <h1 class="text-3xl font-bold tracking-tight text-gray-900">Reports</h1> <p class="mt-2 text-sm text-gray-700">
View various reports and statistics
</p> </div> </div> <!-- Enrollment Statistics --> <div class="mt-8"> <h2 class="text-lg font-medium text-gray-900">Enrollment Statistics by Course</h2> <div class="mt-4 flow-root"> <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> <table class="min-w-full divide-y divide-gray-300"> <thead> <tr> <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Course</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total Enrollments</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Present</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Absent</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Late</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${enrollmentStats.rows.map((stat) => renderTemplate`<tr> <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"> ${stat.course_name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${stat.total_enrollments} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${stat.present_count} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${stat.absent_count} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${stat.late_count} </td> </tr>`)} </tbody> </table> </div> </div> </div> </div> <!-- Student Performance --> <div class="mt-8"> <h2 class="text-lg font-medium text-gray-900">Student Performance by Course</h2> <div class="mt-4 flow-root"> <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> <table class="min-w-full divide-y divide-gray-300"> <thead> <tr> <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Course</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Student</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total Attendance</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Present</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Attendance Rate</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${studentPerformance.rows.map((performance) => renderTemplate`<tr> <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"> ${performance.course_name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${performance.first_name} ${performance.last_name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${performance.total_attendance} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${performance.present_count} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${performance.attendance_rate}%
</td> </tr>`)} </tbody> </table> </div> </div> </div> </div> <!-- Teacher Performance --> <div class="mt-8"> <h2 class="text-lg font-medium text-gray-900">Teacher Performance</h2> <div class="mt-4 flow-root"> <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> <table class="min-w-full divide-y divide-gray-300"> <thead> <tr> <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Teacher</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total Courses</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total Students</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total Records</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Overall Rate</th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${teacherPerformance.rows.map((performance) => renderTemplate`<tr> <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"> ${performance.first_name} ${performance.last_name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${performance.total_courses} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${performance.total_students} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${performance.total_attendance_records} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${performance.overall_attendance_rate}%
</td> </tr>`)} </tbody> </table> </div> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/reports.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/reports.astro";
const $$url = "/admin/reports";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reports,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
