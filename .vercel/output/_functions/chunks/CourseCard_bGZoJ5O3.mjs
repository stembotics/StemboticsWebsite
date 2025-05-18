import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate } from './astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$CourseCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CourseCard;
  const { course } = Astro2.props;
  const getInitials = (firstName, lastName) => {
    const first = firstName?.[0] || "?";
    const last = lastName?.[0] || "?";
    return `${first}${last}`;
  };
  return renderTemplate`${maybeRenderHead()}<article class="card group h-full flex flex-col course-card" data-astro-cid-vhwoplgm> <div class="relative" data-astro-cid-vhwoplgm> <img${addAttribute(course.image, "src")}${addAttribute(course.title, "alt")} class="w-full aspect-video object-cover rounded-t-lg" data-astro-cid-vhwoplgm> <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-primary-700 level-badge" data-astro-cid-vhwoplgm> ${course.level} </div> </div> <div class="p-6 flex-grow flex flex-col" data-astro-cid-vhwoplgm> <div class="flex-grow" data-astro-cid-vhwoplgm> <h3 class="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors" data-astro-cid-vhwoplgm> ${course.title} </h3> <p class="mt-2 text-slate-600 line-clamp-3" data-astro-cid-vhwoplgm> ${course.description} </p> </div> <div class="mt-4 flex items-center justify-between" data-astro-cid-vhwoplgm> <div class="flex items-center" data-astro-cid-vhwoplgm> <div class="w-10 h-10 rounded-full bg-primary-600 text-white font-medium flex items-center justify-center" data-astro-cid-vhwoplgm> ${getInitials(course.instructor.firstName, course.instructor.lastName)} </div> <div class="ml-3" data-astro-cid-vhwoplgm> <p class="text-sm font-medium text-slate-900" data-astro-cid-vhwoplgm> ${course.instructor.firstName} ${course.instructor.lastName} </p> <p class="text-xs text-slate-500" data-astro-cid-vhwoplgm>Instructor</p> </div> </div> <div class="text-right" data-astro-cid-vhwoplgm> <p class="text-lg font-bold text-primary-600" data-astro-cid-vhwoplgm>$${course.price}</p> <p class="text-xs text-slate-500" data-astro-cid-vhwoplgm>${course.duration}</p> </div> </div> <div class="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between" data-astro-cid-vhwoplgm> <a${addAttribute(`/courses/${course.id}`, "href")} class="btn-outline flex-grow" data-astro-cid-vhwoplgm> ${course.isEnrolled ? "Continue Learning" : "View Course"} </a> <button class="like-button bg-white hover:bg-slate-50 p-2 rounded-full shadow-sm transition-all ml-4"${addAttribute(course.id, "data-course-id")}${addAttribute(course.isLiked, "data-liked")} data-astro-cid-vhwoplgm> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-colors"${addAttribute(course.isLiked ? "currentColor" : "none", "fill")} stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-vhwoplgm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-vhwoplgm></path> </svg> <span class="like-count text-sm font-medium ml-1" data-astro-cid-vhwoplgm>${course.likeCount || 0}</span> </button> </div> </div> </article> ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/CourseCard.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/courses/CourseCard.astro", void 0);

export { $$CourseCard as $ };
