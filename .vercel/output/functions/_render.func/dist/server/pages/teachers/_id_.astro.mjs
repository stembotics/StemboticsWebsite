/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_AQO9YnP1.mjs';
import { d as db, v as verifyToken } from '../../chunks/auth_DpLPSZ93.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const teacherResult = await db.execute({
    sql: `
    SELECT 
      t.*,
      u.first_name,
      u.last_name,
      u.email,
      COUNT(c.id) as course_count
    FROM teachers t
    JOIN users u ON t.user_id = u.id
    LEFT JOIN courses c ON c.instructor_id = u.id
    WHERE t.id = ?
    GROUP BY t.id
  `,
    args: [parseInt(id, 10)]
  });
  const rawTeacher = teacherResult.rows[0];
  if (!rawTeacher) {
    return Astro2.redirect("/404");
  }
  const achievementsResult = await db.execute({
    sql: `
    SELECT id, title, description, issuer, date
    FROM teacher_achievements
    WHERE teacher_id = ?
    ORDER BY date DESC
  `,
    args: [rawTeacher.id]
  });
  const achievements = achievementsResult.rows.map((row) => ({
    id: Number(row.id),
    title: String(row.title),
    description: String(row.description),
    issuer: row.issuer ? String(row.issuer) : void 0,
    date: row.date ? String(row.date) : void 0
  }));
  const teacher = {
    ...rawTeacher,
    achievements
  };
  const token = Astro2.cookies.get("token");
  let isOwner = false;
  if (token) {
    const user = verifyToken(token.value);
    if (user && user.userId === teacher.user_id) {
      isOwner = true;
    }
  }
  const coursesResult = await db.execute({
    sql: `
    SELECT id, title, description, image, level, price
    FROM courses
    WHERE instructor_id = ?
    ORDER BY created_at DESC
  `,
    args: [teacher.user_id]
  });
  const courses = coursesResult.rows;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${teacher.first_name} ${teacher.last_name} | Stembotics Academy` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-slate-50 py-12"> <div class="container-custom"> <div class="max-w-4xl mx-auto"> <!-- Teacher Profile Header --> <div class="bg-white rounded-xl shadow-md overflow-hidden mb-8"> <div class="p-8"> <div class="flex items-start justify-between"> <div> <h1 class="text-3xl font-bold text-slate-900"> ${teacher.first_name} ${teacher.last_name} </h1> <p class="text-slate-600 mt-1">${teacher.current_role}</p> <p class="text-slate-600 mt-1">${teacher.location}</p> </div> ${isOwner && renderTemplate`<button id="editProfileBtn" class="btn-secondary">
Edit Profile
</button>`} </div> <!-- Bio Section --> <div class="mt-6"> <h2 class="text-xl font-semibold text-slate-900 mb-2">About</h2> <div id="bioDisplay" class="prose prose-slate max-w-none"> ${teacher.bio || "No bio available yet."} </div> ${isOwner && renderTemplate`<div id="profileEdit" class="hidden mt-4 space-y-4"> <div> <label for="bioInput" class="block text-sm font-medium text-slate-700 mb-1">Bio</label> <textarea id="bioInput" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" rows="4">${teacher.bio || ""}</textarea> </div> <div> <label for="educationInput" class="block text-sm font-medium text-slate-700 mb-1">Education</label> <textarea id="educationInput" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" rows="2">${teacher.education || ""}</textarea> </div> <div> <label for="experienceInput" class="block text-sm font-medium text-slate-700 mb-1">Experience</label> <textarea id="experienceInput" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" rows="2">${teacher.experience || ""}</textarea> </div> <div> <label for="locationInput" class="block text-sm font-medium text-slate-700 mb-1">Location</label> <input type="text" id="locationInput" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"${addAttribute(teacher.location || "", "value")}> </div> <div> <label for="linkedinInput" class="block text-sm font-medium text-slate-700 mb-1">LinkedIn URL (optional)</label> <input type="url" id="linkedinInput" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"${addAttribute(teacher.linkedin || "", "value")} placeholder="https://linkedin.com/in/username"> </div> <div> <label for="portfolioInput" class="block text-sm font-medium text-slate-700 mb-1">Portfolio URL (optional)</label> <input type="url" id="portfolioInput" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"${addAttribute(teacher.portfolio || "", "value")} placeholder="https://yourportfolio.com"> </div> <div class="flex gap-2"> <button id="saveProfileBtn" class="btn-primary">
Save Changes
</button> <button id="cancelProfileBtn" class="btn-secondary">
Cancel
</button> </div> </div>`} </div> <!-- Contact Information --> <div class="mt-6 grid grid-cols-2 gap-4"> <div> <h3 class="text-sm font-medium text-slate-900">Education</h3> <p class="mt-1 text-slate-600">${teacher.education}</p> </div> <div> <h3 class="text-sm font-medium text-slate-900">Experience</h3> <p class="mt-1 text-slate-600">${teacher.experience}</p> </div> ${teacher.linkedin && renderTemplate`<div> <h3 class="text-sm font-medium text-slate-900">LinkedIn</h3> <a${addAttribute(teacher.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="mt-1 text-primary-600 hover:text-primary-700">
View Profile
</a> </div>`} ${teacher.portfolio && renderTemplate`<div> <h3 class="text-sm font-medium text-slate-900">Portfolio</h3> <a${addAttribute(teacher.portfolio, "href")} target="_blank" rel="noopener noreferrer" class="mt-1 text-primary-600 hover:text-primary-700">
View Portfolio
</a> </div>`} </div> <div class="mt-6 flex items-center gap-4"> <div class="relative"> <img${addAttribute(teacher.profile_image || "/default-avatar.png", "src")}${addAttribute(`${teacher.first_name} ${teacher.last_name}`, "alt")} class="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"> ${isOwner && renderTemplate`<label for="profileImageInput" class="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full cursor-pointer hover:bg-primary-700 transition-colors"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <input type="file" id="profileImageInput" accept="image/*" class="hidden"> </label>`} </div> </div>  <div class="mt-8"> <h3 class="text-lg font-semibold text-slate-900 mb-4">Achievements & Certifications</h3> <div id="achievementsList" class="space-y-4"> ${teacher.achievements?.map((achievement) => renderTemplate`<div class="bg-white rounded-lg shadow p-4"> <div class="flex items-start justify-between"> <div> <h4 class="font-medium text-slate-900">${achievement.title}</h4> <p class="text-sm text-slate-600 mt-1">${achievement.description}</p> ${achievement.issuer && renderTemplate`<p class="text-sm text-slate-500 mt-1">Issued by: ${achievement.issuer}</p>`} ${achievement.date && renderTemplate`<p class="text-sm text-slate-500">Date: ${new Date(achievement.date).toLocaleDateString()}</p>`} </div> ${isOwner && renderTemplate`<button class="text-red-600 hover:text-red-700"${addAttribute(achievement.id, "data-achievement-id")}> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path> </svg> </button>`} </div> </div>`)} </div> ${isOwner && renderTemplate`<div id="achievementForm" class="hidden mt-4 space-y-4"> <div> <label for="achievementTitle" class="block text-sm font-medium text-slate-700 mb-1">Title</label> <input type="text" id="achievementTitle" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="achievementDescription" class="block text-sm font-medium text-slate-700 mb-1">Description</label> <textarea id="achievementDescription" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500" rows="2"></textarea> </div> <div> <label for="achievementIssuer" class="block text-sm font-medium text-slate-700 mb-1">Issuing Organization (optional)</label> <input type="text" id="achievementIssuer" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div> <label for="achievementDate" class="block text-sm font-medium text-slate-700 mb-1">Date</label> <input type="date" id="achievementDate" class="w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"> </div> <div class="flex gap-2"> <button id="saveAchievementBtn" class="btn-primary">
Add Achievement
</button> <button id="cancelAchievementBtn" class="btn-secondary">
Cancel
</button> </div> </div>`} ${isOwner && renderTemplate`<button id="addAchievementBtn" class="mt-4 btn-secondary">
Add Achievement
</button>`} </div> <!-- Add Notes Section --> ${isOwner && renderTemplate`<div class="mt-8"> <h2 class="text-2xl font-bold text-slate-900 mb-4">Add Notes for Class</h2> <form id="addNoteForm" class="space-y-4"> <div> <label for="classId" class="block text-sm font-medium text-slate-700">Class ID</label> <input type="number" name="classId" id="classId" class="mt-1 block w-full shadow-sm sm:text-sm border-slate-300 rounded-md" required> </div> <div> <label for="note" class="block text-sm font-medium text-slate-700">Note</label> <textarea name="note" id="note" rows="4" class="mt-1 block w-full shadow-sm sm:text-sm border-slate-300 rounded-md" required></textarea> </div> <div> <label for="studentId" class="block text-sm font-medium text-slate-700">Student ID</label> <input type="number" name="studentId" id="studentId" class="mt-1 block w-full shadow-sm sm:text-sm border-slate-300 rounded-md" required> </div> <button type="submit" class="btn-primary">Add Note</button> </form> </div>`} </div> </div> <!-- Courses Section --> <div class="bg-white rounded-xl shadow-md overflow-hidden"> <div class="p-8"> <h2 class="text-2xl font-bold text-slate-900 mb-6">
Courses (${courses.length})
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${courses.map((course) => renderTemplate`<a${addAttribute(`/courses/${course.id}`, "href")} class="block group"> <div class="relative rounded-lg overflow-hidden"> <img${addAttribute(course.image, "src")}${addAttribute(course.title, "alt")} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> <div class="absolute bottom-0 left-0 right-0 p-4"> <h3 class="text-lg font-semibold text-white mb-1"> ${course.title} </h3> <p class="text-sm text-white/90 line-clamp-2"> ${course.description} </p> </div> </div> </a>`)} </div> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/teachers/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/teachers/[id].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/teachers/[id].astro";
const $$url = "/teachers/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
