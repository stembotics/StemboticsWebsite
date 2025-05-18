/* empty css                                    */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate, e as renderComponent } from '../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DY7GRzor.mjs';
import 'clsx';
import { v as verifyToken, d as db } from '../../chunks/auth_C-EZHYYi.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro$1 = createAstro();
const $$EnrollButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EnrollButton;
  const { courseId, isEnrolled = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button" class="btn-primary w-full"${addAttribute(courseId, "data-course-id")}${addAttribute(isEnrolled, "data-enrolled")} id="enrollButton"${addAttribute(isEnrolled, "disabled")}> ${isEnrolled ? "Enrolled" : "Enroll Now"} </button> ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/EnrollButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/EnrollButton.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return new Response("Course ID is required", { status: 400 });
  }
  const token = Astro2.cookies.get("token");
  const user = token ? verifyToken(token.value) : null;
  const courseResult = await db.execute({
    sql: `
    SELECT 
      c.*,
      u.first_name || ' ' || u.last_name as instructor_name,
      t.id as teacher_id,
      t.current_role as instructor_role,
      CASE WHEN e.id IS NOT NULL THEN 1 ELSE 0 END as is_enrolled
    FROM courses c
    JOIN users u ON c.instructor_id = u.id
    JOIN teachers t ON t.user_id = u.id
    LEFT JOIN enrollments e ON e.course_id = c.id AND e.user_id = ?
    WHERE c.id = ?
  `,
    args: [user?.userId || null, parseInt(id, 10)]
  });
  const course = {
    ...courseResult.rows[0],
    is_enrolled: Boolean(courseResult.rows[0].is_enrolled)
  };
  const contentResult = await db.execute({
    sql: `SELECT 
          week_number,
          id,
          title,
          description,
          type,
          order_index
        FROM course_content 
        WHERE course_id = ? 
        ORDER BY week_number, order_index`,
    args: [id]
  });
  const weeklyContent = contentResult.rows.reduce((acc, row) => {
    const weekNumber = Number(row.week_number);
    if (!acc[weekNumber]) {
      acc[weekNumber] = [];
    }
    acc[weekNumber].push({
      id: String(row.id),
      title: String(row.title),
      description: String(row.description),
      type: String(row.type)
    });
    return acc;
  }, {});
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${course.title} | Stembotics Academy` }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-slate-900 text-white py-12"> <div class="container-custom"> <div class="grid lg:grid-cols-3 gap-12"> <div class="lg:col-span-2"> <h1 class="text-4xl font-bold mb-4 text-white">${course.title}</h1> <p class="text-slate-300 text-lg mb-6">${course.description}</p> <div class="flex flex-wrap gap-4 text-sm text-slate-300"> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"></path> </svg> ${course.duration} </div> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path> </svg> ${course.instructor_name} </div> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> ${course.level} </div> </div> </div> <!-- Enrollment Card --> <div class="lg:justify-self-end"> <div class="bg-white rounded-xl shadow-xl overflow-hidden max-w-md w-full"> <img${addAttribute(course.image, "src")}${addAttribute(course.title, "alt")} class="w-full aspect-video object-cover"> <div class="p-6"> <div class="flex justify-between items-center mb-4"> <div class="text-3xl font-bold text-slate-900">$${course.price}</div> </div> <div class="space-y-4"> ${renderComponent($$result2, "EnrollButton", $$EnrollButton, { "courseId": course.id.toString(), "isEnrolled": course.is_enrolled })} </div> </div> </div> </div> </div> </div> </section>  <section class="py-12"> <div class="container-custom"> <div class="grid lg:grid-cols-3 gap-12"> <div class="lg:col-span-2"> <h2 class="text-2xl font-bold mb-6">Course Content</h2> ${Object.keys(weeklyContent).length > 0 ? renderTemplate`<div class="space-y-4"> ${Object.entries(weeklyContent).map(([weekNumber, contents]) => renderTemplate`<div class="bg-white rounded-lg shadow overflow-hidden"> <div class="week-header bg-slate-50 p-4 flex justify-between items-center cursor-pointer"> <h3 class="font-medium">Week ${weekNumber}</h3> <div class="flex items-center gap-2"> <span class="text-sm text-slate-600">${contents.length} items</span> <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> <div class="week-content hidden"> ${contents.map((content) => renderTemplate`<div class="border-t p-4"> <div class="flex items-start justify-between"> <div> <h4 class="font-medium">${content.title}</h4> <p class="text-sm text-slate-600 mt-1">${content.description}</p> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 mt-2 capitalize"> ${content.type} </span> </div> ${course.is_enrolled ? renderTemplate`<a${addAttribute(`/courses/${course.id}/content/${content.id}`, "href")} class="btn-primary text-sm">
Start
</a>` : renderTemplate`<span class="text-sm text-slate-500">Locked</span>`} </div> </div>`)} </div> </div>`)} </div>` : renderTemplate`<p class="text-slate-500">No content available yet.</p>`} </div> <div class="lg:col-span-1"> ${!course.is_enrolled && renderTemplate`<div class="bg-white rounded-lg shadow p-6 sticky top-6"> <div class="text-center"> <p class="text-3xl font-bold text-slate-900">$${course.price}</p> ${renderComponent($$result2, "EnrollButton", $$EnrollButton, { "courseId": course.id.toString(), "isEnrolled": course.is_enrolled })} </div> </div>`} </div> </div> </div> </section>  <div class="mt-8 border-t border-slate-200 pt-8"> <h2 class="text-2xl font-bold text-slate-900 mb-4">About the Instructor</h2> <div class="flex items-center gap-4"> <div class="flex-1"> <h3 class="text-lg font-semibold text-slate-900"> <a${addAttribute(`/teachers/${course.teacher_id}`, "href")} class="hover:text-primary-600 transition-colors"> ${course.instructor_name} </a> </h3> <p class="text-slate-600 mt-1">${course.instructor_role}</p> </div> <a${addAttribute(`/teachers/${course.teacher_id}`, "href")} class="btn-secondary px-4 py-2">
View Profile
</a> </div> </div> ${renderScript($$result2, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id].astro";
const $$url = "/courses/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
