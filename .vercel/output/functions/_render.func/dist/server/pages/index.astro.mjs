/* empty css                                 */
import { c as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BXRAwln_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_3hfigpS4.mjs';
import { $ as $$CourseCard } from '../chunks/CourseCard_B1kI2N1J.mjs';
import { d as db } from '../chunks/auth_DTf2el9S.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const stats = [
    { value: "25,000+", label: "Students" },
    { value: "120+", label: "Courses" },
    { value: "50+", label: "Instructors" },
    { value: "95%", label: "Satisfaction" }
  ];
  const featuredCoursesResult = await db.execute({
    sql: `
    SELECT 
      c.*,
      u.first_name as instructor_first_name,
      u.last_name as instructor_last_name,
      COUNT(DISTINCT e.id) as student_count
    FROM courses c
    JOIN users u ON c.instructor_id = u.id
    LEFT JOIN enrollments e ON c.id = e.course_id
    GROUP BY c.id
    ORDER BY student_count DESC
    LIMIT 3
  `,
    args: []
  });
  const featuredCourses = featuredCoursesResult.rows.map((row) => ({
    id: String(row.id),
    title: String(row.title),
    description: String(row.description),
    image: String(row.image),
    level: String(row.level),
    duration: String(row.duration),
    price: Number(row.price),
    students: Number(row.student_count),
    rating: 4.5,
    // Default rating since no rating column exists
    instructor: {
      firstName: String(row.instructor_first_name),
      lastName: String(row.instructor_last_name)
    }
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home | Stembotics Academy", "description": "Empowering Future STEM Innovators with robotics, coding, AI, and more. Join our community of learners and educators." }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative overflow-hidden"> <div class="absolute inset-0 bg-gradient-to-r from-primary-800 to-secondary-900 opacity-90"></div> <div class="absolute inset-0 bg-[url('/content/optimized/6.png')] bg-cover bg-center mix-blend-overlay"></div> <div class="container-custom relative z-10 py-20 md:py-28 lg:py-32"> <div class="max-w-3xl text-center mx-auto"> <h1 class="text-white animate-slide-up">
Empowering Future STEM Innovators
</h1> <p class="mt-6 text-lg text-blue-100 md:text-xl max-w-2xl mx-auto animate-slide-up" style="animation-delay: 100ms;">
Stembotics Academy offers cutting-edge courses in robotics, coding, AI, and more. Join our community of learners and educators to shape the future of technology education.
</p> <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 200ms;"> <a href="/courses" class="btn btn-primary px-8 py-3 text-lg shadow-lg">
Explore Courses
</a> <a href="/teachers" class="btn btn-outline px-8 py-3 text-lg">
Become a Teacher
</a> </div> </div> </div> <!-- Wave Divider --> <div class="absolute bottom-0 left-0 right-0"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full h-auto"> <path fill="#f8fafc" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,64C672,64,768,32,864,32C960,32,1056,64,1152,80C1248,96,1344,96,1392,96L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path> </svg> </div> </section>  <section class="section"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto mb-12"> <h2>Featured Courses</h2> <p class="mt-4 text-lg">Discover our most popular courses designed to inspire and educate the next generation of STEM leaders.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${featuredCourses.map((course) => renderTemplate`${renderComponent($$result2, "CourseCard", $$CourseCard, { "course": course })}`)} </div> <div class="mt-12 text-center"> <a href="/courses" class="btn-primary">
View All Courses
</a> </div> </div> </section>  <section class="bg-slate-100 py-16"> <div class="container-custom"> <div class="grid grid-cols-2 md:grid-cols-4 gap-8"> ${stats.map((stat) => renderTemplate`<div class="text-center"> <p class="text-4xl font-bold text-primary-700">${stat.value}</p> <p class="mt-2 text-slate-600">${stat.label}</p> </div>`)} </div> </div> </section>  <section class="section"> <div class="container-custom"> <div class="grid md:grid-cols-2 gap-12 items-center"> <div> <h2>Why Choose Stembotics Academy?</h2> <p class="mt-4">Our innovative approach to STEM education combines hands-on learning with cutting-edge technology to prepare students for the challenges of tomorrow.</p> <ul class="mt-8 space-y-4"> <li class="flex"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="ml-3">Expert instructors with industry experience</p> </li> <li class="flex"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="ml-3">Project-based learning that builds real-world skills</p> </li> <li class="flex"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="ml-3">State-of-the-art virtual labs and resources</p> </li> <li class="flex"> <div class="flex-shrink-0"> <svg class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> <p class="ml-3">Supportive community of like-minded learners</p> </li> </ul> <a href="/about" class="mt-8 inline-flex items-center text-primary-600 font-medium">
Learn more about our approach
<svg class="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a> </div> <div class="relative"> <div class="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden"> <img src="/content/optimized/12.png" alt="Students working on a robotics project" class="w-full h-full object-cover"> </div> <div class="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs"> <div class="flex items-center justify-between"> <div> <p class="font-medium text-slate-900">Project-Based Learning</p> <p class="text-sm text-slate-500">Learn by building real projects</p> </div> <svg class="w-10 h-10 text-primary-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9 12L11 14L15 10M12 3V4M12 20V21M4 12H3M21 12H20M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M6.343 6.343L5.636 5.636M17.657 17.657L18.364 18.364" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div> </div> </div> </div> </div> </section>  <section class="section bg-gradient-to-r from-primary-600 to-secondary-700 text-white"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto"> <h2 class="text-white">Ready to Start Your STEM Journey?</h2> <p class="mt-4 text-lg text-blue-100">Join thousands of students and educators on our platform and discover the exciting world of STEM education.</p> <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> <a href="/signup" class="btn-primary bg-white text-primary-700 hover:bg-blue-50 px-8 py-3">
Sign Up Now
</a> <a href="/courses" class="btn-primary bg-white text-primary-700 hover:bg-blue-50 px-8 py-3">
Browse Courses
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/index.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
