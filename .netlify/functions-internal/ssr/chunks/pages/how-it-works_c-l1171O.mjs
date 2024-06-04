/* empty css                              */
import { e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import '../astro/assets-service_BtMcE9EN.mjs';
import { b as getEntryBySlug, a as $$Base, $ as $$Image } from './404_CSBDS6l-.mjs';
import { $ as $$Shape, a as $$PageHeader } from './_category__DkHQXJ7t.mjs';
import { $ as $$Cta } from './features_KrBe7V6f.mjs';
import { AiFillCheckCircle } from 'react-icons/ai';

const $$HowItWorks = createComponent(async ($$result, $$props, $$slots) => {
  const how_it_works = await getEntryBySlug("how-it-works", "index");
  const { perfomance, our_works } = how_it_works.data;
  const page_data = {
    ...how_it_works.data,
    content: how_it_works.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": how_it_works.data.title, "meta_title": how_it_works.data.meta_title, "description": how_it_works.data.description, "image": how_it_works.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> <div class="row mt-14"> ${perfomance.map((item, i) => renderTemplate`<div class="mt-10 text-center sm:col-6 md:col-4 md:mb-0"> <div${addAttribute(`relative mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg ${perfomance.length - 1 !== i ? "after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full after:translate-x-full after:border-b-2 after:border-dashed after:border-primary/50 after:content-[''] md:after:block" : void 0}`, "class")}> ${renderComponent($$result2, "Image", $$Image, { "height": 122, "width": 144, "src": item.image, "alt": "" })} </div> <h2 class="h5">${item.title}</h2> <p class="mt-4">${item.description}</p> </div>`)} </div> </div> </section> <section> <div class="container"> ${our_works.map((item, index) => renderTemplate`<div class="gx-5 row mt-16 items-center first:mt-12"> <div${addAttribute(`lg:col-7 ${index % 2 === 0 ? "lg:order-1" : "lg:order-0"}`, "class")}> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full object-contain", "alt": "service", "width": 473, "height": 286, "src": item.image })} </div> </div> <div${addAttribute(`mt-6 lg:col-5 lg:mt-0 ${index % 2 === 0 ? "lg:order-0" : "lg:order-1"}`, "class")}> <div class="text-container"> <h2 class="lg:text-4xl">${item.title}</h2> <ul class="mt-6 text-dark lg:-ml-4"> ${item.list.map((list) => renderTemplate`<li class="mb-2 flex items-center rounded px-4"> ${renderComponent($$result2, "AiFillCheckCircle", AiFillCheckCircle, { "className": "mr-3 fill-primary text-white" })} ${list} </li>`)} </ul> </div> </div> </div>`)} </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/how-it-works.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/how-it-works.astro";
const $$url = "/how-it-works";

export { $$HowItWorks as default, $$file as file, $$url as url };
