/* empty css                                    */
import { c as createComponent, a as createAstro, d as renderTemplate, f as defineScriptVars, b as addAttribute, m as maybeRenderHead, e as renderComponent, r as renderScript } from '../../chunks/astro/server_BXRAwln_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_NaL3egT4.mjs';
import { d as db, v as verifyToken, g as getChildren } from '../../chunks/auth_DGYWq9VH.mjs';
import 'clsx';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$TimeSlotSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TimeSlotSelector;
  const { courseId, childId } = Astro2.props;
  const timeSlotsResult = await db.execute({
    sql: `
    SELECT 
      ts.*,
      (SELECT COUNT(*) FROM enrollments e WHERE e.time_slot_id = ts.id) as current_enrollment
    FROM time_slots ts
    WHERE ts.course_id = ?
    ORDER BY ts.day_of_week, ts.start_time
  `,
    args: [courseId]
  });
  const timeSlots = timeSlotsResult.rows.map((row) => ({
    id: String(row.id),
    day_of_week: String(row.day_of_week),
    start_time: String(row.start_time),
    end_time: String(row.end_time),
    max_capacity: Number(row.max_capacity),
    current_enrollment: Number(row.current_enrollment)
  }));
  return renderTemplate(_a || (_a = __template(["", '<div> <label for="timeSlotId" class="block text-sm font-medium text-slate-700 mb-1">\nSelect Time Slot\n</label> <select id="timeSlotId" name="timeSlotId" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-slate-900"> <option value="">Choose a time slot...</option> ', " </select> ", " </div> <script>(function(){", "\n  // Update time slot options when child selection changes\n  const childSelect = document.getElementById('childId');\n  const timeSlotSelect = document.getElementById('timeSlotId');\n  const form = document.getElementById('enrollment-form');\n\n  childSelect?.addEventListener('change', async () => {\n    const childId = childSelect.value;\n    if (!childId) return;\n\n    try {\n      const response = await fetch(`/api/courses/${courseId}/available-slots?childId=${childId}`);\n      const data = await response.json();\n      \n      if (!response.ok) {\n        throw new Error(data.error || 'Failed to fetch available time slots');\n      }\n\n      // Update time slot options\n      timeSlotSelect.innerHTML = '<option value=\"\">Choose a time slot...</option>';\n      data.timeSlots.forEach(slot => {\n        const option = document.createElement('option');\n        option.value = slot.id;\n        option.textContent = `${slot.day_of_week} ${slot.start_time} - ${slot.end_time} (${slot.current_enrollment}/${slot.max_capacity} enrolled)`;\n        option.disabled = slot.current_enrollment >= slot.max_capacity;\n        timeSlotSelect.appendChild(option);\n      });\n    } catch (error) {\n      console.error('Error fetching available time slots:', error);\n    }\n  });\n\n  // Handle form submission\n  form?.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    \n    const childId = childSelect.value;\n    const timeSlotId = timeSlotSelect.value;\n\n    if (!childId || !timeSlotId) {\n      alert('Please select both a child and a time slot');\n      return;\n    }\n\n    try {\n      const response = await fetch('/api/courses/enroll', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          'Authorization': `Bearer ${document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]}`\n        },\n        body: JSON.stringify({\n          courseId: Number(courseId),\n          childId: Number(childId),\n          timeSlotId: Number(timeSlotId)\n        })\n      });\n\n      const data = await response.json();\n\n      if (!response.ok) {\n        throw new Error(data.error || 'Failed to enroll in course');\n      }\n\n      // Redirect to success page or show success message\n      window.location.href = `/courses/${courseId}?enrolled=true`;\n    } catch (error) {\n      alert(error.message || 'An error occurred while enrolling in the course');\n    }\n  });\n})();<\/script>"], ["", '<div> <label for="timeSlotId" class="block text-sm font-medium text-slate-700 mb-1">\nSelect Time Slot\n</label> <select id="timeSlotId" name="timeSlotId" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-slate-900"> <option value="">Choose a time slot...</option> ', " </select> ", " </div> <script>(function(){", "\n  // Update time slot options when child selection changes\n  const childSelect = document.getElementById('childId');\n  const timeSlotSelect = document.getElementById('timeSlotId');\n  const form = document.getElementById('enrollment-form');\n\n  childSelect?.addEventListener('change', async () => {\n    const childId = childSelect.value;\n    if (!childId) return;\n\n    try {\n      const response = await fetch(\\`/api/courses/\\${courseId}/available-slots?childId=\\${childId}\\`);\n      const data = await response.json();\n      \n      if (!response.ok) {\n        throw new Error(data.error || 'Failed to fetch available time slots');\n      }\n\n      // Update time slot options\n      timeSlotSelect.innerHTML = '<option value=\"\">Choose a time slot...</option>';\n      data.timeSlots.forEach(slot => {\n        const option = document.createElement('option');\n        option.value = slot.id;\n        option.textContent = \\`\\${slot.day_of_week} \\${slot.start_time} - \\${slot.end_time} (\\${slot.current_enrollment}/\\${slot.max_capacity} enrolled)\\`;\n        option.disabled = slot.current_enrollment >= slot.max_capacity;\n        timeSlotSelect.appendChild(option);\n      });\n    } catch (error) {\n      console.error('Error fetching available time slots:', error);\n    }\n  });\n\n  // Handle form submission\n  form?.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    \n    const childId = childSelect.value;\n    const timeSlotId = timeSlotSelect.value;\n\n    if (!childId || !timeSlotId) {\n      alert('Please select both a child and a time slot');\n      return;\n    }\n\n    try {\n      const response = await fetch('/api/courses/enroll', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n          'Authorization': \\`Bearer \\${document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]}\\`\n        },\n        body: JSON.stringify({\n          courseId: Number(courseId),\n          childId: Number(childId),\n          timeSlotId: Number(timeSlotId)\n        })\n      });\n\n      const data = await response.json();\n\n      if (!response.ok) {\n        throw new Error(data.error || 'Failed to enroll in course');\n      }\n\n      // Redirect to success page or show success message\n      window.location.href = \\`/courses/\\${courseId}?enrolled=true\\`;\n    } catch (error) {\n      alert(error.message || 'An error occurred while enrolling in the course');\n    }\n  });\n})();<\/script>"])), maybeRenderHead(), timeSlots.map((slot) => renderTemplate`<option${addAttribute(slot.id, "value")}${addAttribute(slot.current_enrollment >= slot.max_capacity, "disabled")}> ${slot.day_of_week} ${slot.start_time} - ${slot.end_time}
(${slot.current_enrollment}/${slot.max_capacity} enrolled)
</option>`), timeSlots.length === 0 && renderTemplate`<p class="mt-2 text-sm text-slate-500">
No time slots available for this course.
</p>`, defineScriptVars({ courseId }));
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/TimeSlotSelector.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
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
      CASE WHEN e.id IS NOT NULL THEN 1 ELSE 0 END as is_enrolled,
      e.time_slot_id
    FROM courses c
    JOIN users u ON c.instructor_id = u.id
    JOIN teachers t ON t.user_id = u.id
    LEFT JOIN enrollments e ON e.course_id = c.id AND e.child_id IN (
      SELECT id FROM children WHERE parent_user_id = ?
    )
    WHERE c.id = ?
  `,
    args: [user?.userId || null, parseInt(id, 10)]
  });
  const course = {
    id: Number(courseResult.rows[0]?.id),
    title: String(courseResult.rows[0]?.title),
    description: String(courseResult.rows[0]?.description),
    image: String(courseResult.rows[0]?.image),
    level: String(courseResult.rows[0]?.level),
    duration: String(courseResult.rows[0]?.duration),
    price: Number(courseResult.rows[0]?.price),
    instructor_id: Number(courseResult.rows[0]?.instructor_id),
    instructor: {
      name: String(courseResult.rows[0]?.instructor_name || ""),
      role: String(courseResult.rows[0]?.instructor_role || "")
    },
    teacher_id: Number(courseResult.rows[0]?.teacher_id),
    is_enrolled: Boolean(courseResult.rows[0]?.is_enrolled || 0)
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
  let children = [];
  if (user?.role === "parent" && user?.userId) {
    children = await getChildren(user.userId);
  }
  if (!course) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${course.title} | Stembotics Academy` }, { "default": async ($$result2) => renderTemplate`${course.is_enrolled && renderTemplate`${maybeRenderHead()}<div class="bg-primary-50 border-b border-primary-200"> <div class="container-custom py-3"> <div class="flex items-center justify-center text-primary-700"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path> </svg> <p>Please check your email for enrollment confirmation and payment details.</p> </div> </div> </div>`} <section class="bg-slate-900 text-white py-12"> <div class="container-custom"> <div class="grid lg:grid-cols-3 gap-12"> <div class="lg:col-span-2"> <h1 class="text-4xl font-bold mb-4 text-white">${course.title}</h1> <p id="course-description" class="text-slate-300 text-lg mb-6">${course.description}</p> <div class="flex flex-wrap gap-4 text-sm text-slate-300"> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"></path> </svg> ${course.duration} </div> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path> </svg> ${course.instructor.name} </div> <div class="flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> ${course.level} </div> </div> </div> <!-- Enrollment Card --> <div class="lg:justify-self-end"> <div class="bg-white rounded-xl shadow-xl overflow-hidden max-w-md w-full"> <img${addAttribute(course.image, "src")}${addAttribute(course.title, "alt")} class="w-full aspect-video object-cover"> <div class="p-6"> <div class="flex justify-between items-center mb-4"> <div class="text-3xl font-bold text-slate-900">$${course.price}/month</div> </div> <div class="space-y-4"> ${user?.role === "parent" ? children.length === 0 ? renderTemplate`<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4"> <p class="text-yellow-800">
Please add your children to your account before enrolling in courses.
<a href="/dashboard" class="text-yellow-900 underline ml-1">Go to Dashboard</a> </p> </div>` : renderTemplate`<form id="enrollment-form" class="space-y-4"> <div> <label for="childId" class="block text-sm font-medium text-slate-700 mb-1">
Select Child
</label> <select id="childId" name="childId" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-slate-900"> <option value="">Choose a child...</option> ${children.map((child) => renderTemplate`<option${addAttribute(child.id, "value")}> ${child.first_name} ${child.last_name} </option>`)} </select> </div> ${renderComponent($$result2, "TimeSlotSelector", $$TimeSlotSelector, { "courseId": String(course.id), "childId": String(children[0]?.id) })} <button type="submit" class="w-full btn-primary">
Enroll Child
</button> </form>` : renderTemplate`<div class="bg-gray-50 border border-gray-200 rounded-lg p-4"> <p class="text-gray-800">
Please <a href="/login" class="text-primary-600 hover:text-primary-500">log in</a> or${" "} <a href="/signup" class="text-primary-600 hover:text-primary-500">sign up</a> to enroll in this course.
</p> </div>`} </div> </div> </div> </div> </div> </div> </section>  <section class="py-12"> <div class="container-custom"> <div class="grid lg:grid-cols-3 gap-12"> <div class="lg:col-span-2"> <h2 class="text-2xl font-bold mb-6">Course Content</h2> ${Object.keys(weeklyContent).length > 0 ? renderTemplate`<div class="space-y-4"> ${Object.entries(weeklyContent).map(([weekNumber, contents]) => renderTemplate`<div class="bg-white rounded-lg shadow overflow-hidden"> <div class="week-header bg-slate-50 p-4 flex justify-between items-center cursor-pointer"> <h3 class="font-medium">Week ${weekNumber}</h3> <div class="flex items-center gap-2"> <span class="text-sm text-slate-600">${contents.length} items</span> <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </div> </div> <div class="week-content hidden"> ${contents.map((content) => renderTemplate`<div class="border-t p-4"> <div class="flex items-start justify-between"> <div> <h4 class="font-medium">${content.title}</h4> <p class="text-sm text-slate-600 mt-1">${content.description}</p> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 mt-2 capitalize"> ${content.type} </span> </div> ${course.is_enrolled ? renderTemplate`<a${addAttribute(`/courses/${course.id}/content/${content.id}`, "href")} class="btn-primary text-sm">
Start
</a>` : renderTemplate`<span class="text-sm text-slate-500">Locked</span>`} </div> </div>`)} </div> </div>`)} </div>` : renderTemplate`<p class="text-slate-500">No content available yet.</p>`} </div> <div class="lg:col-span-1"> ${!course.is_enrolled && renderTemplate`<div class="bg-white rounded-lg shadow p-6 sticky top-6"> <div class="text-center"> <p class="text-3xl font-bold text-slate-900">$${course.price}/month</p> ${user?.role === "parent" ? children.length === 0 ? renderTemplate`<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4"> <p class="text-yellow-800">
Please add your children to your account before enrolling in courses.
<a href="/dashboard" class="text-yellow-900 underline ml-1">Go to Dashboard</a> </p> </div>` : renderTemplate`<form id="enrollment-form" class="space-y-4"> <div> <label for="childId" class="block text-sm font-medium text-slate-700 mb-1">
Select Child
</label> <select id="childId" name="childId" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-slate-900"> <option value="">Choose a child...</option> ${children.map((child) => renderTemplate`<option${addAttribute(child.id, "value")}> ${child.first_name} ${child.last_name} </option>`)} </select> </div> ${renderComponent($$result2, "TimeSlotSelector", $$TimeSlotSelector, { "courseId": String(course.id), "childId": String(children[0]?.id) })} <button type="submit" class="w-full btn-primary">
Enroll Child
</button> </form>` : renderTemplate`<div class="bg-gray-50 border border-gray-200 rounded-lg p-4"> <p class="text-gray-800">
Please <a href="/login" class="text-primary-600 hover:text-primary-500">log in</a> or${" "} <a href="/signup" class="text-primary-600 hover:text-primary-500">sign up</a> to enroll in this course.
</p> </div>`} </div> </div>`} </div> </div> </div> </section>  <div class="mt-8 border-t border-slate-200 pt-8"> <h2 class="text-2xl font-bold text-slate-900 mb-4">About the Instructor</h2> <div class="flex items-center gap-4"> <div class="flex-1"> <h3 class="text-lg font-semibold text-slate-900"> <a${addAttribute(`/teachers/${course.teacher_id}`, "href")} class="hover:text-primary-600 transition-colors"> ${course.instructor.name} </a> </h3> <p class="text-slate-600 mt-1">${course.instructor.role}</p> </div> <a${addAttribute(`/teachers/${course.teacher_id}`, "href")} class="btn-secondary px-4 py-2">
View Profile
</a> </div> </div> ${renderScript($$result2, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id].astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/[id].astro";
const $$url = "/courses/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
