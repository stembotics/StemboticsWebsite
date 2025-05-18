/* empty css                                 */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Dt5ugNSC.mjs';
import { $ as $$CourseCard } from '../chunks/CourseCard_bGZoJ5O3.mjs';
import { d as db, v as verifyToken } from '../chunks/auth_DuCNQg1W.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

async function getCourses() {
  try {
    const result = await db.execute(
      "SELECT * FROM courses WHERE is_published = true ORDER BY created_at DESC"
    );
    return result.rows.map((row) => ({
      id: String(row.id || ""),
      title: String(row.title || ""),
      description: String(row.description || ""),
      price: Number(row.price || 0),
      image_url: row.image_url ? String(row.image_url) : void 0,
      category: String(row.category || ""),
      level: String(row.level || ""),
      duration: String(row.duration || ""),
      instructor_id: String(row.instructor_id || ""),
      created_at: row.created_at ? new Date(String(row.created_at)) : /* @__PURE__ */ new Date(),
      updated_at: row.updated_at ? new Date(String(row.updated_at)) : /* @__PURE__ */ new Date()
    }));
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const token = Astro2.cookies.get("token");
  const user = token ? verifyToken(token.value) : null;
  const likedCourses = Astro2.cookies.get("liked_courses")?.value?.split(",") || [];
  const courses = await db.execute({
    sql: `
    SELECT 
      c.*,
      u.first_name as instructor_first_name,
      u.last_name as instructor_last_name,
      CASE WHEN e.id IS NOT NULL THEN 1 ELSE 0 END as is_enrolled,
      COUNT(DISTINCT cl.id) as like_count,
      CASE WHEN user_likes.id IS NOT NULL THEN 1 ELSE 0 END as is_liked
    FROM courses c
    LEFT JOIN users u ON c.instructor_id = u.id
    LEFT JOIN enrollments e ON c.id = e.course_id AND e.user_id = ?
    LEFT JOIN course_likes cl ON c.id = cl.course_id
    LEFT JOIN course_likes user_likes ON c.id = user_likes.course_id AND user_likes.user_id = ?
    GROUP BY c.id
  `,
    args: [user?.userId || 0, user?.userId || 0]
  }).then((result) => result.rows.map((row) => {
    const courseId = String(row.id);
    const isLiked = user ? Boolean(row.is_liked) : likedCourses.includes(courseId);
    return {
      id: courseId,
      title: String(row.title),
      description: String(row.description),
      image: String(row.image),
      level: String(row.level),
      duration: String(row.duration),
      price: Number(row.price),
      instructor: {
        firstName: String(row.instructor_first_name),
        lastName: String(row.instructor_last_name)
      },
      isEnrolled: Boolean(row.is_enrolled),
      likeCount: Number(row.like_count),
      isLiked
    };
  }));
  await getCourses();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Courses", "description": "Explore our comprehensive range of STEM courses, from robotics to programming, designed to empower the next generation of innovators." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "ItemList",\n      "itemListElement": [\n        ${getCoursesData.map((course, index) => `{\n          "@type": "ListItem",\n          "position": ${index + 1},\n          "item": {\n            "@type": "Course",\n            "name": "${course.title}",\n            "description": "${course.description}",\n            "provider": {\n              "@type": "Organization",\n              "name": "Stembotics Academy",\n              "sameAs": "https://stembotics.org"\n            },\n            "offers": {\n              "@type": "Offer",\n              "price": "${course.price}",\n              "priceCurrency": "USD",\n              "availability": "https://schema.org/InStock"\n            }\n          }\n        }`).join(\',\')}\n      ]\n    }\n  <\/script>  ', '<section class="bg-gradient-to-r from-primary-700 to-secondary-800 text-white py-12 md:py-16"> <div class="container-custom"> <div class="max-w-3xl"> <h1 class="text-white">Explore Our Courses</h1> <p class="mt-4 text-lg text-blue-100 max-w-2xl">\nDiscover a wide range of STEM courses designed to inspire curiosity, build skills, and prepare for the future.\n</p> </div> </div> </section>  <section class="section"> <div class="container-custom"> <!-- Filters --> <div class="mb-10 bg-white p-6 rounded-lg shadow-sm border border-slate-200"> <div class="grid md:grid-cols-3 gap-6"> <!-- Search --> <div class="md:col-span-2"> <label for="search" class="block text-sm font-medium text-slate-700 mb-1">Search</label> <div class="relative rounded-md shadow-sm"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <svg class="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path> </svg> </div> <input type="text" name="search" id="search" class="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 text-sm border-slate-300 rounded-md" placeholder="Search courses..."> </div> </div> <!-- Level --> <div> <label for="level" class="block text-sm font-medium text-slate-700 mb-1">Level</label> <select id="level" name="level" class="w-full border-slate-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 text-sm"> <option value="">All Levels</option> <option value="beginner">Beginner</option> <option value="intermediate">Intermediate</option> <option value="advanced">Advanced</option> </select> </div> </div> </div> <!-- Course Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ', ` </div> </div> </section>  <section class="section bg-slate-100"> <div class="container-custom"> <div class="bg-white rounded-2xl overflow-hidden shadow-lg"> <div class="md:flex"> <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center"> <h2 class="text-3xl font-bold text-slate-900">Can't find what you're looking for?</h2> <p class="mt-4 text-lg text-slate-600">Request a course or suggest a topic you'd like to learn about. We're always expanding our curriculum based on student interests.</p> <div class="mt-8"> <a href="/contact" class="btn-primary">
Request a Course
</a> </div> </div> <div class="md:w-1/2"> <img src="https://images.pexels.com/photos/5428263/pexels-photo-5428263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Students collaborating" class="w-full h-full object-cover"> </div> </div> </div> </div> </section> `], ['  <script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "ItemList",\n      "itemListElement": [\n        \\${getCoursesData.map((course, index) => \\`{\n          "@type": "ListItem",\n          "position": \\${index + 1},\n          "item": {\n            "@type": "Course",\n            "name": "\\${course.title}",\n            "description": "\\${course.description}",\n            "provider": {\n              "@type": "Organization",\n              "name": "Stembotics Academy",\n              "sameAs": "https://stembotics.org"\n            },\n            "offers": {\n              "@type": "Offer",\n              "price": "\\${course.price}",\n              "priceCurrency": "USD",\n              "availability": "https://schema.org/InStock"\n            }\n          }\n        }\\`).join(\',\')}\n      ]\n    }\n  <\/script>  ', '<section class="bg-gradient-to-r from-primary-700 to-secondary-800 text-white py-12 md:py-16"> <div class="container-custom"> <div class="max-w-3xl"> <h1 class="text-white">Explore Our Courses</h1> <p class="mt-4 text-lg text-blue-100 max-w-2xl">\nDiscover a wide range of STEM courses designed to inspire curiosity, build skills, and prepare for the future.\n</p> </div> </div> </section>  <section class="section"> <div class="container-custom"> <!-- Filters --> <div class="mb-10 bg-white p-6 rounded-lg shadow-sm border border-slate-200"> <div class="grid md:grid-cols-3 gap-6"> <!-- Search --> <div class="md:col-span-2"> <label for="search" class="block text-sm font-medium text-slate-700 mb-1">Search</label> <div class="relative rounded-md shadow-sm"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <svg class="h-5 w-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path> </svg> </div> <input type="text" name="search" id="search" class="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 text-sm border-slate-300 rounded-md" placeholder="Search courses..."> </div> </div> <!-- Level --> <div> <label for="level" class="block text-sm font-medium text-slate-700 mb-1">Level</label> <select id="level" name="level" class="w-full border-slate-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 text-sm"> <option value="">All Levels</option> <option value="beginner">Beginner</option> <option value="intermediate">Intermediate</option> <option value="advanced">Advanced</option> </select> </div> </div> </div> <!-- Course Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ', ` </div> </div> </section>  <section class="section bg-slate-100"> <div class="container-custom"> <div class="bg-white rounded-2xl overflow-hidden shadow-lg"> <div class="md:flex"> <div class="md:w-1/2 p-8 md:p-12 flex flex-col justify-center"> <h2 class="text-3xl font-bold text-slate-900">Can't find what you're looking for?</h2> <p class="mt-4 text-lg text-slate-600">Request a course or suggest a topic you'd like to learn about. We're always expanding our curriculum based on student interests.</p> <div class="mt-8"> <a href="/contact" class="btn-primary">
Request a Course
</a> </div> </div> <div class="md:w-1/2"> <img src="https://images.pexels.com/photos/5428263/pexels-photo-5428263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Students collaborating" class="w-full h-full object-cover"> </div> </div> </div> </div> </section> `])), maybeRenderHead(), courses.map((course) => renderTemplate`${renderComponent($$result2, "CourseCard", $$CourseCard, { "course": course })}`)) })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/index.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/courses/index.astro";
const $$url = "/courses";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
