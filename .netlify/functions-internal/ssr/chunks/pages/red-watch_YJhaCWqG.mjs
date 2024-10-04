/* empty css                              */
import { e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_BN1N3Yq0.mjs';
import 'kleur/colors';
import '../astro/assets-service_CnD27BNI.mjs';
import { b as getEntryBySlug, a as $$Base, $ as $$Image } from './404_mW7yNKop.mjs';
import { $ as $$Shape } from './_category__Bw4ISlXe.mjs';
import { a as $$FeatureBanner, $ as $$Cta } from './features_DnfmPP9U.mjs';
import { AiFillCheckCircle } from 'react-icons/ai';

const $$RedWatch = createComponent(async ($$result, $$props, $$slots) => {
  const red_watch = await getEntryBySlug("red-watch", "index");
  const { perfomance, our_works } = red_watch.data;
  console.log(red_watch.data);
  ({
    ...red_watch.data,
    content: red_watch.body
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": red_watch.data.title, "meta_title": red_watch.data.meta_title, "description": red_watch.data.description, "image": red_watch.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FeatureBanner", $$FeatureBanner, { "features": red_watch.data })} ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section> <div class="container"> ${our_works.map((item, index) => renderTemplate`<div class="gx-5 row mt-16 items-center first:mt-12"> <div${addAttribute(`lg:col-7 ${index % 2 === 0 ? "lg:order-1" : "lg:order-0"}`, "class")}> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full object-contain", "alt": "service", "width": 473, "height": 286, "src": item.image })} </div> </div> <div${addAttribute(`mt-6 lg:col-5 lg:mt-0 ${index % 2 === 0 ? "lg:order-0" : "lg:order-1"}`, "class")}> <div class="text-container"> <h2 class="lg:text-4xl">${item.title}</h2> <ul class="mt-6 text-dark lg:-ml-4"> ${item.list.map((list) => renderTemplate`<li class="mb-2 flex items-center rounded px-4"> ${renderComponent($$result2, "AiFillCheckCircle", AiFillCheckCircle, { "className": "mr-3 fill-primary text-white" })} ${list} </li>`)} </ul> </div> </div> </div>`)} </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/red-watch.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/red-watch.astro";
const $$url = "/red-watch";

export { $$RedWatch as default, $$file as file, $$url as url };
