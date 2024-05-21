/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { g as getSinglePage, $ as $$Shape, a as $$PageHeader } from './_category__QxcF0r5b.mjs';
import { a as $$Base } from './404_3uU1bBY2.mjs';

const $$Astro$1 = createAstro("https://stembotics.org");
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Default;
  const { data } = Astro2.props;
  const { Content } = await data.render();
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/Default.astro", void 0);

const $$Astro = createAstro("https://stembotics.org");
async function getStaticPaths() {
  const pages = await getSinglePage("pages");
  const paths = pages.map((page) => ({
    params: {
      regular: page.slug
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  const page_data = {
    ...page.data
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </div> </section> ${renderComponent($$result2, "Default", $$Default, { "data": page })} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/[regular].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/[regular].astro";
const $$url = "/[regular]";

export { $$regular as default, $$file as file, getStaticPaths, $$url as url };
