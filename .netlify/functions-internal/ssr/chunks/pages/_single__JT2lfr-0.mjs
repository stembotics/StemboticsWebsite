/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, g as addAttribute, u as unescapeHTML } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { c as config, $ as $$Image, h as humanize, s as slugify, a as $$Base, b as getEntryBySlug, m as markdownify } from './404_BlBkARjQ.mjs';
import { d as dateFormat, r as readingTime, g as getSinglePage, $ as $$Shape, a as $$PageHeader } from './_category__bYZtMlhs.mjs';
import { jsx, Fragment } from 'react/jsx-runtime';
import { DiscussionEmbed } from 'disqus-react';
import 'react';
import { FaRegUserCircle, FaRegCalendarAlt, FaRegClock, FaRegFolder } from 'react-icons/fa';
import '../astro/assets-service_BtMcE9EN.mjs';

const Disqus = () => {
  const { disqus } = config;
  return /* @__PURE__ */ jsx(Fragment, { children: disqus.enable && /* @__PURE__ */ jsx("div", { className: "row mt-16 justify-center ", children: /* @__PURE__ */ jsx(
    DiscussionEmbed,
    {
      shortname: disqus.shortname,
      config: disqus.settings
    }
  ) }) });
};

const $$Astro$2 = createAstro("https://stembotics.org");
const $$BlogSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BlogSingle;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${maybeRenderHead()}<section class="section blog-single"> <div class="container"> <div class="row justify-center"> <div class="lg:col-10"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": post.data.image, "alt": "", "width": 920, "height": 450 })} </div> <div class="mt-10 max-w-[810px] lg:col-9"> <h1 class="h2"> ${post.data.title} </h1> <div class="mb-5 mt-6 flex items-center space-x-2"> <ul class="mb-4"> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegUserCircle", FaRegUserCircle, { "className": "mr-2 -mt-1 inline-block" })} ${humanize(post.data.author)} </li> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "mr-2 -mt-1 inline-block" })} ${dateFormat(post.data.date)} </li> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegClock", FaRegClock, { "className": "mr-2 -mt-1 inline-block" })} ${readingTime(post.body)} </li> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegFolder", FaRegFolder, { "className": "mr-2 -mt-1 inline-block" })} ${post.data.categories.map((category, index) => renderTemplate`<a${addAttribute(`/categories/${slugify(category)}`, "href")} class="hover:text-primary"> ${humanize(category)} ${index !== post.data.categories.length - 1 && ","} </a>`)} </li> </ul> </div> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> ${renderComponent($$result, "Disqus", Disqus, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/function-components/Disqus", "client:component-export": "default" })} </div> </div> </div> </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/BlogSingle.astro", void 0);

const $$Astro$1 = createAstro("https://stembotics.org");
async function getStaticPaths$1() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const paths = posts.map((post) => ({
    params: {
      single: post.slug
    },
    props: { post }
  }));
  return paths;
}
const $$single$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$single$1;
  const { post } = Astro2.props;
  const { title, meta_title, description, image } = post.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogSingle", $$BlogSingle, { "post": post })} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/blog/[single].astro", void 0);

const $$file$1 = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/blog/[single].astro";
const $$url$1 = "/blog/[single]";

const _single_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://stembotics.org");
async function getStaticPaths() {
  const integrations = await getSinglePage("integrations");
  const paths = integrations.map((post) => ({
    params: {
      single: post.slug
    },
    props: { post }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const integraionsIndex = await getEntryBySlug(
    "integrations",
    "-index"
  );
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const page_data = {
    ...post.data,
    index_title: integraionsIndex.data.title,
    slug: post.slug
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": post.data.title, "meta_title": post.data.meta_title, "description": post.data.description, "image": post.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-8 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </div> </section> <section class="section career-single pt-0"> <div class="container"> <div class="lg:gx-4 row"> <div class="mx-auto lg:col-8"> <div class="lg:py-[60px] rounded-xl bg-white p-7 shadow-lg lg:px-12"> <div class="mb-8 px-4 text-center"> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": post.data.image, "alt": "", "height": 80, "width": 80 })} <h1 class="mt-6">${post.data.title}</h1> <p class="mt-6">${unescapeHTML(markdownify(post.data.excerpt))}</p> <a class="btn btn-primary mt-8 px-10"${addAttribute(post.data.button.link, "href")}>${humanize(post.data.button.label)} ${humanize(post.data.name)}</a> </div> <div class="content">${renderComponent($$result2, "Content", Content, {})}</div> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/integrations/[single].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/integrations/[single].astro";
const $$url = "/integrations/[single]";

const _single_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _single_$1 as _, _single_ as a };
