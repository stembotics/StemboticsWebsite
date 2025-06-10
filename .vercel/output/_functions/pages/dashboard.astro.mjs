/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, e as renderComponent, r as renderScript, d as renderTemplate, a as createAstro, b as addAttribute, F as Fragment } from '../chunks/astro/server_BXRAwln_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_NaL3egT4.mjs';
import { $ as $$TimeSlotManager } from '../chunks/TimeSlotManager_D3TlHMBy.mjs';
import { v as verifyToken, d as db, g as getChildren } from '../chunks/auth_DGYWq9VH.mjs';
import 'clsx';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$CourseForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="courseForm" class="space-y-6"> <div> <label for="title" class="block text-sm font-medium text-slate-700 mb-1">Course Title *</label> <input type="text" id="title" name="title" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="description" class="block text-sm font-medium text-slate-700 mb-1">Description *</label> <textarea id="description" name="description" rows="4" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></textarea> </div> <div> <label for="image" class="block text-sm font-medium text-slate-700 mb-1">Course Image URL *</label> <input type="url" id="image" name="image" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="level" class="block text-sm font-medium text-slate-700 mb-1">Level *</label> <select id="level" name="level" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> <option value="">Select Level</option> <option value="Beginner">Beginner</option> <option value="Intermediate">Intermediate</option> <option value="Advanced">Advanced</option> </select> </div> <div> <label for="duration" class="block text-sm font-medium text-slate-700 mb-1">Duration *</label> <input type="text" id="duration" name="duration" required placeholder="e.g., 8 weeks" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> </div> <div> <label for="price" class="block text-sm font-medium text-slate-700 mb-1">Price *</label> <div class="relative rounded-md shadow-sm"> <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"> <span class="text-slate-500 sm:text-sm">$</span> </div> <input type="number" id="price" name="price" required min="0" step="0.01" class="w-full rounded-md border-slate-300 pl-7 focus:border-primary-500 focus:ring-primary-500"> </div> </div> <div> <h3 class="text-lg font-semibold text-gray-900 mb-2">Time Slots</h3> ${renderComponent($$result, "TimeSlotManager", $$TimeSlotManager, { "courseId": null, "isEditing": false })} </div> <div id="errorMessage" class="text-red-600 text-sm hidden"></div> <button type="submit" class="btn-primary w-full">
Create Course
</button> </form> ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/CourseForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/CourseForm.astro", void 0);

const $$Astro$1 = createAstro();
const $$ChildrenManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ChildrenManager;
  const { children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-xl shadow-md overflow-hidden"> <div class="p-6"> <div class="flex justify-between items-center mb-6"> <h2 class="text-xl font-semibold">My Children</h2> <button id="addChildBtn" class="btn-primary">
Add Child
</button> </div> ${children.length === 0 ? renderTemplate`<div class="text-center py-8"> <p class="text-slate-600">No children added yet. Add your first child to get started.</p> </div>` : renderTemplate`<div class="grid gap-4"> ${children.map((child) => renderTemplate`<div class="border rounded-lg p-4 hover:border-primary-500 transition-colors"> <div class="flex justify-between items-start"> <div> <h3 class="font-medium text-lg">${child.first_name} ${child.last_name}</h3> <p class="text-slate-600 text-sm mt-1">Grade ${child.grade_level}</p> <p class="text-slate-600 text-sm">DOB: ${new Date(child.date_of_birth).toLocaleDateString()}</p> </div> <div class="flex gap-2"> <button class="text-primary-600 hover:text-primary-700"${addAttribute(child.id, "data-child-id")} data-action="edit">
Edit
</button> <button class="text-red-600 hover:text-red-700"${addAttribute(child.id, "data-child-id")} data-action="delete">
Delete
</button> </div> </div> ${child.medical_emergency_contact_info && renderTemplate`<div class="mt-2 text-sm"> <span class="font-medium">Medical Emergency Contact Info:</span> ${child.medical_emergency_contact_info} </div>`} </div>`)} </div>`} </div> </div> <!-- Add/Edit Child Modal --> <div id="childModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center"> <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4"> <h3 class="text-xl font-semibold mb-4" id="modalTitle">Add Child</h3> <form id="childForm" class="space-y-4"> <input type="hidden" id="childId" name="childId"> <div class="grid grid-cols-2 gap-4"> <div> <label for="childFirstName" class="block text-sm font-medium text-slate-700 mb-1">First Name</label> <input type="text" id="childFirstName" name="firstName" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="childLastName" class="block text-sm font-medium text-slate-700 mb-1">Last Name</label> <input type="text" id="childLastName" name="lastName" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> </div> <div> <label for="dateOfBirth" class="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label> <input type="date" id="dateOfBirth" name="dateOfBirth" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="grade" class="block text-sm font-medium text-slate-700 mb-1">Grade</label> <input type="text" id="grade" name="grade" required class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="medicalInfo" class="block text-sm font-medium text-slate-700 mb-1">Medical Information (Optional)</label> <textarea id="medicalInfo" name="medicalInfo" rows="2" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"></textarea> </div> <div class="flex justify-end gap-3 mt-6"> <button type="button" id="cancelBtn" class="px-4 py-2 text-slate-600 hover:text-slate-700">
Cancel
</button> <button type="submit" class="btn-primary">
Save
</button> </div> </form> </div> </div> ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/dashboard/ChildrenManager.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/dashboard/ChildrenManager.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const token = Astro2.cookies.get("token");
  if (!token) {
    return Astro2.redirect("/login");
  }
  const user = verifyToken(token.value);
  if (!user) {
    return Astro2.redirect("/login");
  }
  const userResult = await db.execute({
    sql: "SELECT * FROM users WHERE id = ?",
    args: [user.userId]
  });
  const userData = userResult.rows[0];
  if (userData.role === "admin") {
    return Astro2.redirect("/admin");
  }
  const isTeacher = userData.role === "teacher";
  let courses;
  if (isTeacher) {
    const result = await db.execute({
      sql: "SELECT * FROM courses WHERE instructor_id = ?",
      args: [user.userId]
    });
    courses = result.rows.map((row) => ({
      id: String(row.id),
      title: String(row.title),
      description: String(row.description),
      image: String(row.image),
      price: Number(row.price),
      progress: 0
    }));
  } else {
    const result = await db.execute({
      sql: `SELECT 
            c.*,
            COALESCE(
              (SELECT ROUND(
                CASE 
                  WHEN COUNT(*) = 0 THEN 0
                  ELSE (COUNT(CASE WHEN p.status = 'completed' THEN 1 END) * 100.0 / COUNT(*))
                END
              )
               FROM course_content cc
               LEFT JOIN progress p ON p.content_id = cc.id 
                                  AND p.enrollment_id = e.id
               WHERE cc.course_id = c.id
               GROUP BY cc.course_id),
              0
            ) as progress
          FROM courses c 
          JOIN enrollments e ON e.course_id = c.id 
          JOIN children ch ON ch.id = e.child_id
          WHERE ch.parent_user_id = ?`,
      args: [user.userId]
    });
    courses = result.rows.map((row) => ({
      id: String(row.id),
      title: String(row.title),
      description: String(row.description),
      image: String(row.image),
      price: Number(row.price),
      progress: Number(row.progress || 0)
    }));
  }
  let children = [];
  if (userData.role === "parent") {
    if (typeof userData.id === "number" && !isNaN(userData.id)) {
      children = await getChildren(userData.id);
    } else {
      console.warn("Invalid user id for parent:", userData.id);
      children = [];
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Dashboard | ${isTeacher ? "Teacher" : userData.role === "parent" ? "Parent" : "Student"}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-slate-50"> <div class="bg-gradient-to-r from-primary-600 to-secondary-600 pb-32"> <header class="py-10"> <div class="container-custom"> <h1 class="text-white">Welcome, ${userData.first_name}!</h1> <p class="mt-2 text-primary-100"> ${isTeacher ? "Manage your courses and create new content" : userData.role === "parent" ? "Manage your children and their learning" : "Track your progress and continue learning"} </p> </div> </header> </div> <main class="-mt-32"> <div class="container-custom"> <div class="grid grid-cols-1 gap-8 pb-12"> ${isTeacher ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`  <div class="bg-white rounded-lg shadow p-6"> <div class="flex justify-between items-center mb-6"> <h2 class="text-2xl font-bold">Your Courses</h2> <button class="btn-primary" onclick="document.getElementById('createCourseModal').classList.remove('hidden')">
Create New Course
</button> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${courses.map((course) => renderTemplate`<div class="bg-white rounded-lg border border-slate-200 overflow-hidden"> <img${addAttribute(course.image, "src")}${addAttribute(course.title, "alt")} class="w-full h-48 object-cover"> <div class="p-4"> <h3 class="font-bold text-lg mb-2">${course.title}</h3> <p class="text-slate-600 text-sm mb-4">${course.description}</p> <div class="flex justify-between items-center"> <span class="text-primary-600 font-medium">$${course.price}</span> <div class="flex gap-2"> <a${addAttribute(`/courses/${course.id}/manage`, "href")} class="btn-outline text-sm">
Manage
</a> <a${addAttribute(`/courses/${course.id}`, "href")} class="btn-outline text-sm">
View
</a> </div> </div> </div> </div>`)} </div> </div>  ${renderComponent($$result3, "CourseForm", $$CourseForm, {})} ` })}` : userData.role === "parent" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`  <div class="space-y-8"> <div class="bg-white rounded-lg shadow p-6"> <h2 class="text-2xl font-bold mb-6">Children</h2> ${renderComponent($$result3, "ChildrenManager", $$ChildrenManager, { "children": children })} </div> <!-- Enrolled Courses --> <div class="bg-white rounded-lg shadow p-6"> <h2 class="text-2xl font-bold mb-6">Enrolled Courses</h2> ${children.length === 0 ? renderTemplate`<p class="text-slate-600">Add your children to enroll them in courses.</p>` : renderTemplate`<div class="space-y-4"> ${children.map((child) => renderTemplate`<div class="border rounded-lg p-4"> <h3 class="font-medium text-lg mb-2">${child.first_name ? `${child.first_name} ${child.last_name}` : "Child"}'s Courses</h3> ${Array.isArray(child.enrollments) && child.enrollments.some((e) => e && e.course && typeof e.course.id === "number" && !isNaN(e.course.id) && e.course.id !== null) ? renderTemplate`<div class="space-y-3"> ${child.enrollments.map((enrollment, idx) => enrollment && enrollment.course && typeof enrollment.course.id === "number" && !isNaN(enrollment.course.id) && enrollment.course.id !== null ? renderTemplate`<div class="flex justify-between items-center"> <div> <p class="font-medium">${enrollment.course.title}</p> <p class="text-sm text-slate-600">Status: ${enrollment.status}</p> </div> <button type="button" class="text-primary-600 hover:text-primary-700 view-course-btn"${addAttribute(encodeURIComponent(JSON.stringify({
    childName: child.first_name + " " + child.last_name,
    ...enrollment,
    course: enrollment.course
  })), "data-child")}${addAttribute(idx, "data-idx")}>
View Course
</button> </div>` : null)} </div>` : renderTemplate`<p class="text-slate-600">No courses enrolled yet.</p>`} </div>`)} </div>`} </div> <!-- Recent Activity --> <div class="bg-white rounded-lg shadow p-6"> <h2 class="text-2xl font-bold mb-6">Recent Activity</h2> <div class="space-y-4"> ${children.length === 0 ? renderTemplate`<p class="text-slate-600">Add your children to see their activity.</p>` : renderTemplate`<div class="space-y-4"> ${children.map((child) => renderTemplate`<div class="border rounded-lg p-4"> <h3 class="font-medium text-lg mb-2">${child.first_name ? `${child.first_name} ${child.last_name}` : "Child"}'s Activity</h3> <p class="text-slate-600">No recent activity.</p> </div>`)} </div>`} </div> </div> </div> ` })}` : renderTemplate`<!-- Student Dashboard -->
            <div class="space-y-8"> <!-- Enrolled Courses --> <div class="bg-white rounded-lg shadow p-6"> <h2 class="text-2xl font-bold mb-6">Your Courses</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${courses.map((course) => renderTemplate`<div class="bg-white rounded-lg border border-slate-200 overflow-hidden"> <img${addAttribute(course.image, "src")}${addAttribute(course.title, "alt")} class="w-full h-48 object-cover"> <div class="p-4"> <h3 class="font-bold text-lg mb-2">${course.title}</h3> <div class="mb-4"> <div class="flex justify-between text-sm text-slate-600 mb-1"> <span>Progress</span> <span>${course.progress}%</span> </div> <div class="w-full bg-slate-200 rounded-full h-2"> <div class="bg-primary-600 h-2 rounded-full"${addAttribute(`width: ${course.progress}%`, "style")}></div> </div> </div> <a${addAttribute(`/courses/${course.id}`, "href")} class="btn-primary w-full text-center"> ${course.progress === 0 ? "Start Course" : "Continue Learning"} </a> </div> </div>`)} </div> </div> <!-- Course Recommendations --> <div class="bg-white rounded-lg shadow p-6"> <h2 class="text-2xl font-bold mb-6">Recommended Courses</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <a href="/courses" class="flex items-center justify-center h-48 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300 hover:border-primary-500 hover:bg-slate-100 transition-colors"> <div class="text-center"> <svg class="w-8 h-8 text-slate-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg> <span class="text-slate-600 font-medium">Explore More Courses</span> </div> </a> </div> </div> </div>`} </div> </div> </main> </div>  <div id="courseModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 hidden"> <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"> <button id="closeModalBtn" class="absolute top-2 right-2 text-slate-500 hover:text-slate-700">&times;</button> <h2 class="text-2xl font-bold mb-2" id="modalCourseTitle"></h2> <p class="mb-2 text-slate-700" id="modalCourseDesc"></p> <div class="mb-2"> <span class="font-medium">Instructor:</span> <span id="modalInstructor"></span> </div> <div class="mb-2"> <span class="font-medium">Status:</span> <span id="modalStatus"></span> </div> <div class="mb-2"> <span class="font-medium">Next Class:</span> <span id="modalNextClass"></span> </div> <div class="mb-2"> <span class="font-medium">Time Slot:</span> <span id="modalTimeSlot"></span> </div> </div> </div> ${renderScript($$result2, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/dashboard/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/dashboard/index.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/dashboard/index.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
