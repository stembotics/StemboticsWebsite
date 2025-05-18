/* empty css                                          */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../../chunks/Layout_DY7GRzor.mjs';
import { v as verifyToken, d as db } from '../../../../chunks/auth_C-EZHYYi.mjs';
export { r as renderers } from '../../../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$contentId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$contentId;
  const { id, contentId } = Astro2.params;
  if (!id || !contentId) {
    return Astro2.redirect("/404");
  }
  const token = Astro2.cookies.get("token");
  const user = token ? verifyToken(token.value) : null;
  const contentResult = await db.execute({
    sql: `SELECT 
          cc.title, 
          cc.description, 
          cc.type, 
          cc.content,
          c.instructor_id
        FROM course_content cc
        JOIN courses c ON cc.course_id = c.id
        WHERE cc.id = ? AND cc.course_id = ?`,
    args: [parseInt(contentId, 10), parseInt(id, 10)]
  });
  const content = contentResult.rows[0];
  if (!content) {
    return Astro2.redirect("/404");
  }
  let isInstructor = false;
  if (user) {
    const userResult = await db.execute({
      sql: "SELECT role FROM users WHERE id = ?",
      args: [user.userId]
    });
    const userRole = userResult.rows[0]?.role;
    isInstructor = userRole === "teacher" && user.userId === content.instructor_id;
  }
  let students = [];
  let attendance = [];
  if (isInstructor) {
    const studentsResult = await db.execute({
      sql: `
      SELECT u.id, u.first_name, u.last_name
      FROM enrollments e
      JOIN users u ON e.user_id = u.id
      WHERE e.course_id = ?
    `,
      args: [parseInt(id, 10)]
    });
    students = studentsResult.rows.map((row) => ({
      id: Number(row.id),
      first_name: String(row.first_name),
      last_name: String(row.last_name)
    }));
    const attendanceResult = await db.execute({
      sql: `
      SELECT student_id, status
      FROM class_attendance
      WHERE session_id = ?
    `,
      args: [parseInt(contentId, 10)]
    });
    attendance = attendanceResult.rows.map((row) => ({
      student_id: Number(row.student_id),
      status: String(row.status)
    }));
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${content.title} | Stembotics Academy` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-slate-50 py-12"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold mb-4">${content.title}</h1> <p class="text-lg text-slate-700 mb-6">${content.description}</p> <div class="prose prose-lg mb-8"> ${content.content} </div> ${isInstructor && renderTemplate`<div class="bg-white rounded-lg shadow-md p-6 mb-8"> <h2 class="text-2xl font-bold mb-4">Attendance Management</h2> <div class="space-y-4"> ${students.map((student) => {
    const studentAttendance = attendance.find((a) => a.student_id === student.id);
    return renderTemplate`<div class="flex items-center justify-between p-4 bg-slate-50 rounded-lg"> <div> <p class="font-medium">${student.first_name} ${student.last_name}</p> </div> <div class="flex items-center gap-2"> <select class="attendance-select rounded-md border-slate-300"${addAttribute(student.id, "data-student-id")}${addAttribute(contentId, "data-class-id")}> <option value="pending"${addAttribute(studentAttendance?.status === "pending", "selected")}>Pending</option> <option value="completed"${addAttribute(studentAttendance?.status === "completed", "selected")}>Completed</option> <option value="missed"${addAttribute(studentAttendance?.status === "missed", "selected")}>Missed</option> </select> </div> </div>`;
  })} </div> </div>`} </div> </div> </div> ` })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id]/content/[contentId].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id]/content/[contentId].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id]/content/[contentId].astro";
const $$url = "/courses/[id]/content/[contentId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$contentId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
