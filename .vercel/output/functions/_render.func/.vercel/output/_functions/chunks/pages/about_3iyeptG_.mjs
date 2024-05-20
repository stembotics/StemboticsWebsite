/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead, u as unescapeHTML, h as renderComponent } from '../astro_CnyVfoUF.mjs';
import 'kleur/colors';
import { $ as $$Shape, a as $$PageHeader } from './_category__D5N2FkSM.mjs';
import 'clsx';
import { m as markdownify, $ as $$Image, b as getEntryBySlug, a as $$Base } from './404_kYFGQAqB.mjs';
import '../astro/assets-service_C63UcpOK.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://stembotics.org");
const $$CounterComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CounterComponent;
  const { counter } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="counter mt-16"> <div class="row mx-0 rounded-[20px] bg-white px-10 shadow-lg lg:py-10"> ', ' </div> </div> <script>\n  // astro:page-load event is fired when the page is loaded\n  document.addEventListener("astro:page-load", () => {\n    const counters = document.querySelectorAll(".count");\n    const speed = 700;\n    counters.forEach((counter) => {\n      const animate = () => {\n        const value = +counter.getAttribute("aria-valuenow");\n        const data = +counter.innerText;\n\n        const time = value / speed;\n        if (data < value) {\n          counter.innerText = Math.ceil(data + time);\n          setTimeout(animate, 1);\n        } else {\n          counter.innerText = value;\n        }\n      };\n\n      animate();\n    });\n  });\n<\/script>'])), maybeRenderHead(), counter.map((item) => renderTemplate`<div class="border-border sm:col-6 lg:col-3 px-10 py-10 text-center lg:border-r lg:py-0 last:lg:border-none"> <h2> <span class="count"${addAttribute(item.number, "aria-valuenow")}>
0
</span> <span${addAttribute("text-primary", "class")}${addAttribute({
    color: item.color
  }, "style")}>
+
</span> </h2> <p>${item.name}</p> </div>`));
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/about/CounterComponent.astro", void 0);

const $$Astro$1 = createAstro("https://stembotics.org");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { gallery } = Astro2.props;
  const { title, images } = gallery;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row justify-center text-center"> <div class="col-8"> <h2>${unescapeHTML(markdownify(title))}</h2> </div> </div> <div class="relative"> <div class="row" id="photo-gallery"> ${images.map((image) => renderTemplate`<div class="picture-item col-6 mt-12"> ${" "} <img class="w-full"${addAttribute(image, "src")} alt=""> </div>`)} <div class="js-shuffle-sizer col-1"></div> </div> <img class="absolute -bottom-5 -left-5 -z-[1]" src="images/shape-2.png" alt=""> <img class="absolute -right-5 bottom-20 -z-[1] h-16 w-16" src="images/shape.png" alt=""> </div> </div> </section> `;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/about/Gallery.astro", void 0);

const $$Astro = createAstro("https://stembotics.org");
const $$Works = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Works;
  const {
    features: { title, button, features_list }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row items-center justify-between"> <div class="md:col-5"> <h2 class="text-center md:text-left">${unescapeHTML(title)}</h2> </div> ${button.enable && renderTemplate`<div class="mt-6 text-center md:col-3 md:mt-0 md:text-right"> <a class="btn btn-primary"${addAttribute(button.link, "href")}> ${button.label} </a> </div>`} </div> <div class="row mt-14"> ${features_list.map((item, i) => renderTemplate`<div class="mb-8 sm:col-6 lg:col-4"> <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8"> <div class="gradient-number relative inline-block"> <span class="bg-gradient absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"> ${i > 8 ? i + 1 : `0${i + 1}`} </span> ${renderComponent($$result, "Image", $$Image, { "height": 90, "width": 90, "src": "/images/gradient-number-bg.png", "alt": "" })} </div> <h4 class="my-6">${item.title}</h4> <p>${item.content}</p> </div> </div>`)} </div> </div> </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/about/Works.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getEntryBySlug("about", "index");
  const { counter, gallery, features } = about.data;
  const page_data = {
    ...about.data,
    content: about.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": about.data.title, "meta_title": about.data.meta_title, "description": about.data.description, "image": about.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero py-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[768px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> ${renderComponent($$result2, "CounterComponent", $$CounterComponent, { "counter": counter })} <!-- benifit --> <!-- gellary --> ${renderComponent($$result2, "Gallery", $$Gallery, { "gallery": gallery })} <!-- our works --> ${renderComponent($$result2, "Works", $$Works, { "features": features })} </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/about.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
