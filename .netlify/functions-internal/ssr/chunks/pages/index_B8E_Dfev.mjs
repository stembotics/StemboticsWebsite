/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, g as addAttribute, u as unescapeHTML } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { d as dateFormat, r as readingTime, g as getSinglePage, c as getTaxonomy, $ as $$Shape, a as $$PageHeader, e as $$BlogCategories, b as $$Blogs } from './_category__DkHQXJ7t.mjs';
import '../astro/assets-service_BtMcE9EN.mjs';
import { $ as $$Image, s as slugify, h as humanize, p as plainify, c as config, b as getEntryBySlug, a as $$Base, m as markdownify } from './404_CSBDS6l-.mjs';
import { s as sortByDate, $ as $$Pagination } from './_slug__Cz8YXUAR.mjs';
import { $ as $$Cta } from './features_KrBe7V6f.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as Icon from 'react-feather';
import { Play } from 'react-feather';
import { useState } from 'react';
import { marked } from 'marked';
import { AiOutlineArrowRight, AiFillCheckCircle } from 'react-icons/ai';
import 'github-slugger';
import YouTube from 'react-youtube';

const $$Astro$3 = createAstro("https://stembotics.org");
const $$FeaturedBlog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FeaturedBlog;
  const { summary_length } = config.settings;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="h4 mb-4">Featured Posts</h2> <div class="featured-posts row"> ${posts.map((post) => renderTemplate`<div class="mb-8 md:col-6"> <div class="card"> ${renderComponent($$result, "Image", $$Image, { "class": "card-img", "width": 235, "height": 304, "src": post.data.image, "alt": post.data.title })} <div class="card-content"> <div class="card-tags space-x-1"> ${post.data.categories.map((category) => renderTemplate`<a class="tag"${addAttribute(`/categories/${slugify(category)}`, "href")}> ${humanize(category)} </a>`)} </div> <h3 class="h4 card-title"> <a${addAttribute(`/blog/${post.slug}`, "href")}>${post.data.title}</a> </h3> <p class="mb-4 text-text"> ${plainify(post.body?.slice(0, Number(summary_length)))}...
</p> <div class="card-footer mt-6 flex space-x-4"> <span class="inline-flex items-center text-xs text-[#666]"> <svg class="mr-1.5" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.5 2H11V0.375C11 0.16875 10.8313 0 10.625 0H9.375C9.16875 0 9 0.16875 9 0.375V2H5V0.375C5 0.16875 4.83125 0 4.625 0H3.375C3.16875 0 3 0.16875 3 0.375V2H1.5C0.671875 2 0 2.67188 0 3.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V3.5C14 2.67188 13.3281 2 12.5 2ZM12.3125 14.5H1.6875C1.58438 14.5 1.5 14.4156 1.5 14.3125V5H12.5V14.3125C12.5 14.4156 12.4156 14.5 12.3125 14.5Z" fill="#939393"></path> </svg> ${dateFormat(post.data.date)} </span> <span class="inline-flex items-center text-xs text-[#666]"> <svg class="mr-1.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.65217 0C3.42496 0 0 3.58065 0 8C0 12.4194 3.42496 16 7.65217 16C11.8794 16 15.3043 12.4194 15.3043 8C15.3043 3.58065 11.8794 0 7.65217 0ZM7.65217 14.4516C4.24264 14.4516 1.48107 11.5645 1.48107 8C1.48107 4.43548 4.24264 1.54839 7.65217 1.54839C11.0617 1.54839 13.8233 4.43548 13.8233 8C13.8233 11.5645 11.0617 14.4516 7.65217 14.4516ZM9.55905 11.0839L6.93941 9.09355C6.84376 9.01935 6.78822 8.90323 6.78822 8.78065V3.48387C6.78822 3.27097 6.95484 3.09677 7.15849 3.09677H8.14586C8.34951 3.09677 8.51613 3.27097 8.51613 3.48387V8.05484L10.5773 9.62258C10.7439 9.74839 10.7778 9.99032 10.6575 10.1645L10.0774 11C9.95708 11.171 9.72567 11.2097 9.55905 11.0839Z" fill="#939393"></path> </svg> ${readingTime(post.body)} </span> </div> </div> </div> </div>`)} </div>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/blog/FeaturedBlog.astro", void 0);

const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const { blog_folder } = config.settings;
  const blogIndex = await getEntryBySlug(
    blog_folder,
    "-index"
  );
  const posts = await getSinglePage(blog_folder);
  const categories = await getTaxonomy(config.settings.blog_folder, "categories");
  const sortedPosts = sortByDate(posts);
  const featuredPost = sortedPosts.filter((item) => item.data.featured);
  const recentPost = sortedPosts.filter((item) => !item.data.featured);
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const currentPosts = recentPost.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": blogIndex.data.title, "meta_title": blogIndex.data.meta_title, "description": blogIndex.data.description, "image": blogIndex.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": blogIndex.data })} </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "FeaturedBlog", $$FeaturedBlog, { "posts": featuredPost })} ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} <h2 class="h4 mb-4">Recent Posts</h2> ${renderComponent($$result2, "Blogs", $$Blogs, { "posts": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": blog_folder, "currentPage": 1, "totalPages": totalPages })} </div> </section> ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/blog/index.astro", void 0);

const $$file$4 = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/blog/index.astro";
const $$url$4 = "/blog";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const CareerBenifits = ({ benifits: { title, description, benifit_list } }) => {
  return /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center lg:col-8", children: [
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4", children: description })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "row mt-14 text-center", children: benifit_list.map((item, i) => {
      const FeatherIcon = Icon[humanize(item.icon)];
      return /* @__PURE__ */ jsxs("div", { className: "mb-10 sm:col-6 lg:col-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `mx-auto h-[90px] w-[100px]`,
              style: {
                fill: item.color,
                opacity: 0.1
              },
              viewBox: "0 0 200 200",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M47.1,-61.5C62.2,-53.9,76.5,-41.7,83.1,-25.9C89.6,-10.2,88.6,9.1,82.4,26.4C76.2,43.6,64.9,58.7,50.4,70.5C35.8,82.2,17.9,90.6,0,90.7C-18,90.7,-35.9,82.4,-48.4,70C-61,57.6,-68.1,41,-73.6,23.9C-79.1,6.9,-83,-10.7,-78.6,-26C-74.3,-41.3,-61.6,-54.3,-47.1,-62.1C-32.6,-70,-16.3,-72.7,-0.1,-72.5C16,-72.3,32,-69.2,47.1,-61.5Z",
                  transform: "translate(100 100)"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "benifit-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[28%]", children: /* @__PURE__ */ jsx(FeatherIcon, { color: item.color, size: 48 }) })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "h4 mb-4 mt-8", children: item.title }),
        /* @__PURE__ */ jsx("p", { children: item.content })
      ] }, i);
    }) })
  ] }) });
};

const JobPosts = ({ posts, categories, career: { title, subtitle } }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab ? posts : posts.filter((post) => post.data.categories.includes(tab));
  return /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center lg:col-8", children: [
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "mt-4",
          dangerouslySetInnerHTML: { __html: marked.parseInline(subtitle) }
        }
      ),
      /* @__PURE__ */ jsxs("ul", { className: "filter-list mt-8 flex flex-wrap items-center justify-center", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `filter-btn ${!tab ? "filter-btn-active" : void 0} btn btn-sm cursor-pointer`,
            onClick: () => setTab(""),
            children: "All Categories"
          }
        ) }),
        categories.map((category, i) => /* @__PURE__ */ jsx("li", { onClick: () => setTab(category), children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `filter-btn ${tab === category ? "filter-btn-active" : void 0} btn btn-sm cursor-pointer`,
            children: humanize(category)
          }
        ) }, `category-${i}`))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "row mt-12", children: filterPost.map((post, i) => /* @__PURE__ */ jsx("div", { className: "mb-8 md:col-6", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white p-5 shadow-lg lg:p-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "h4", children: post.data.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-6", children: post.data.excerpt }),
      /* @__PURE__ */ jsxs("ul", { className: "mt-6 flex flex-wrap items-center text-dark", children: [
        /* @__PURE__ */ jsxs("li", { className: "my-1 mr-8 inline-flex items-center", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "mr-1",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M7.65217 0C3.42496 0 0 3.58065 0 8C0 12.4194 3.42496 16 7.65217 16C11.8794 16 15.3043 12.4194 15.3043 8C15.3043 3.58065 11.8794 0 7.65217 0ZM7.65217 14.4516C4.24264 14.4516 1.48107 11.5645 1.48107 8C1.48107 4.43548 4.24264 1.54839 7.65217 1.54839C11.0617 1.54839 13.8233 4.43548 13.8233 8C13.8233 11.5645 11.0617 14.4516 7.65217 14.4516ZM9.55905 11.0839L6.93941 9.09355C6.84376 9.01935 6.78822 8.90323 6.78822 8.78065V3.48387C6.78822 3.27097 6.95484 3.09677 7.15849 3.09677H8.14586C8.34951 3.09677 8.51613 3.27097 8.51613 3.48387V8.05484L10.5773 9.62258C10.7439 9.74839 10.7778 9.99032 10.6575 10.1645L10.0774 11C9.95708 11.171 9.72567 11.2097 9.55905 11.0839Z",
                  fill: "currentColor"
                }
              )
            }
          ),
          post.data.job_nature
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "my-1 mr-8 inline-flex items-center", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "mr-1",
              width: "16",
              height: "20",
              viewBox: "0 0 23 33",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M11.5007 0.970703C5.61504 0.970703 0.824219 5.75958 0.824219 11.6472C0.824219 20.1359 10.3612 31.2259 10.7669 31.6956L11.5007 32.5401L12.2345 31.6937C12.6402 31.2259 22.1772 20.1359 22.1772 11.6472C22.1772 5.75958 17.3863 0.970703 11.5007 0.970703ZM11.5007 29.5351C9.2761 26.7709 2.7654 18.1229 2.7654 11.6472C2.7654 6.83111 6.68463 2.91188 11.5007 2.91188C16.3167 2.91188 20.236 6.83111 20.236 11.6472C20.236 18.1171 13.7253 26.7709 11.5007 29.5351ZM11.5007 6.09347C8.28998 6.09347 5.67716 8.70629 5.67716 11.917C5.67716 15.1277 8.28998 17.7405 11.5007 17.7405C14.7114 17.7405 17.3242 15.1277 17.3242 11.917C17.3242 8.70629 14.7114 6.09347 11.5007 6.09347ZM11.5007 15.7993C9.35957 15.7993 7.61834 14.0581 7.61834 11.917C7.61834 9.77588 9.35957 8.03464 11.5007 8.03464C13.6418 8.03464 15.383 9.77588 15.383 11.917C15.383 14.0581 13.6418 15.7993 11.5007 15.7993Z",
                  fill: "currentColor"
                }
              )
            }
          ),
          post.data.location
        ] }),
        /* @__PURE__ */ jsx("li", { className: "my-1 mr-8", children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "inline-flex items-center font-semibold text-primary",
            href: `/career/${post.slug}`,
            children: [
              "Read More",
              /* @__PURE__ */ jsx(AiOutlineArrowRight, { className: "ml-1.5 text-xl font-bold" })
            ]
          }
        ) })
      ] })
    ] }) }, `post-${i}`)) })
  ] }) });
};

const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const careerIndex = await getEntryBySlug(
    "careers",
    "-index"
  );
  const { benifits, career, image } = careerIndex.data;
  const categories = await getTaxonomy("careers", "categories");
  const jobposts = await getSinglePage("careers");
  const page_data = {
    title: careerIndex.data.title,
    page_title: careerIndex.data.page_title,
    content: careerIndex.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": careerIndex.data.title, "meta_title": careerIndex.data.meta_title, "description": careerIndex.data.description, "image": careerIndex.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} <div class="col-12 mt-14"> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": "", "height": 532, "width": 1044, "class": "w-full rounded" })} ${renderComponent($$result2, "Image", $$Image, { "class": "lg:h-[150px] lg:w-[150px] absolute -left-[8%] bottom-[12%] z-[-1] h-20 w-20 -rotate-90 lg:-left-8 lg:bottom-4", "src": "/images/shape.png", "height": 130, "width": 130, "alt": "" })} ${renderComponent($$result2, "Image", $$Image, { "class": "absolute -bottom-4 -right-4 z-[-1] h-16 w-16 -rotate-90", "src": "/images/shape.png", "alt": "", "height": 64, "width": 64 })} </div> </div> </div> </section>  ${renderComponent($$result2, "CareerBenifits", CareerBenifits, { "benifits": benifits, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/CareerBenifits", "client:component-export": "default" })} ${renderComponent($$result2, "JobPosts", JobPosts, { "client:load": true, "categories": categories, "career": career, "posts": jobposts, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/JobPosts", "client:component-export": "default" })} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/career/index.astro", void 0);

const $$file$3 = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/career/index.astro";
const $$url$3 = "/career";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const { blog_folder } = config.settings;
  const posts = await getSinglePage(blog_folder);
  const categories = await getTaxonomy(blog_folder, "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "categories" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": { title: "Categories" } })} </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} ${renderComponent($$result2, "Blogs", $$Blogs, { "posts": posts })} </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/categories/index.astro", void 0);

const $$file$2 = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/categories/index.astro";
const $$url$2 = "/categories";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const IntegrateMedia = ({ integrations, categories }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab ? integrations : integrations.filter((post) => post.data.categories.includes(tab));
  return /* @__PURE__ */ jsx("section", { className: "section pt-0", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:col-10", children: /* @__PURE__ */ jsxs("ul", { className: "integration-tab filter-list flex flex-wrap items-center justify-center", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "span",
        {
          className: `filter-btn ${!tab ? "filter-btn-active" : void 0} btn btn-sm cursor-pointer`,
          onClick: () => setTab(""),
          children: "All Categories"
        }
      ) }),
      categories.map((category, i) => /* @__PURE__ */ jsx("li", { onClick: () => setTab(category), children: /* @__PURE__ */ jsx(
        "span",
        {
          className: `filter-btn ${tab === category ? "filter-btn-active" : void 0} btn btn-sm cursor-pointer`,
          children: humanize(category)
        }
      ) }, `category-${i}`))
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "integration-tab-items row mt-10", children: filterPost.map((item, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "integration-tab-item mb-8 md:col-6 lg:col-4",
        children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white px-10 pb-8 pt-11 shadow-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "integration-card-head flex items-center space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: item.data.image, alt: "" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "h4", children: humanize(item.data.name) }),
              item.data.categories.map((category, i2) => /* @__PURE__ */ jsx("span", { className: "font-medium", children: humanize(category) }, i2))
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "my-5 border-y border-border py-5", children: /* @__PURE__ */ jsx(
            "p",
            {
              dangerouslySetInnerHTML: {
                __html: marked.parseInline(
                  item.data.excerpt.slice(0, 80)
                )
              }
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "group inline-flex items-center font-semibold text-dark hover:text-primary",
              href: `/integrations/${item.slug}`,
              children: [
                "View integration",
                /* @__PURE__ */ jsx(AiOutlineArrowRight, { className: "ml-1.5 text-xl font-bold duration-300 group-hover:ml-3" })
              ]
            }
          )
        ] })
      },
      i
    )) })
  ] }) });
};

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const integraionsIndex = await getEntryBySlug(
    "integrations",
    "-index"
  );
  const categories = await getTaxonomy("integrations", "categories");
  const integrations = await getSinglePage("integrations");
  const page_data = {
    ...integraionsIndex.data,
    content: integraionsIndex.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": integraionsIndex.data.title, "meta_title": integraionsIndex.data.meta_title, "description": integraionsIndex.data.description, "image": integraionsIndex.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> ${renderComponent($$result2, "IntegrateMedia", IntegrateMedia, { "client:load": true, "integrations": integrations, "categories": categories, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/IntegrateMedia", "client:component-export": "default" })} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/integrations/index.astro", void 0);

const $$file$1 = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/integrations/index.astro";
const $$url$1 = "/integrations";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const Notice = ({ type, children }) => {
  return /* @__PURE__ */ jsxs("div", { className: `notice ${type} relative mb-8 `, children: [
    /* @__PURE__ */ jsx("div", { className: "notice-head absolute top-0 left-0 z-10 flex h-[30px] w-full items-center rounded-t-md px-3" }),
    /* @__PURE__ */ jsx("div", { className: "notice-body my-0 rounded-b-md p-3 pt-[40px] text-black", children })
  ] });
};

const $$Astro$2 = createAstro("https://stembotics.org");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.props;
  const { title, button, image, content } = banner;
  return renderTemplate`${maybeRenderHead()}<section class="section banner relative"> <div class="container"> <div class="row items-center"> <div class="lg:col-6"> <h1 class="banner-title">${unescapeHTML(markdownify(title))}</h1> <p class="mt-6">${unescapeHTML(markdownify(content))}</p> ${button.enable && renderTemplate`<a class="btn btn-white mt-8"${addAttribute(button.link, "href")}> ${button.label} </a>`} </div> <div class="lg:col-6"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full object-contain", "alt": "banner", "src": image, "width": 603, "height": 396 })} </div> </div> </div> ${renderComponent($$result, "Image", $$Image, { "class": "banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]", "alt": "banner", "src": "/images/banner-shape.png", "width": 496, "height": 466 })} </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/Banner.astro", void 0);

const HomapageFeature = ({ feature_list }) => {
  return /* @__PURE__ */ jsx("div", { className: "key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4", children: feature_list.map((item, i) => {
    const FeatherIcon = Icon[humanize(item.icon)];
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "h4 text-xl lg:text-2xl", children: item.title }),
            /* @__PURE__ */ jsx("p", { children: item.content })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "icon mt-4", children: /* @__PURE__ */ jsx(FeatherIcon, {}) })
        ]
      },
      i
    );
  }) });
};

const $$Astro$1 = createAstro("https://stembotics.org");
const $$KeyFeatures = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$KeyFeatures;
  const { key_features } = Astro2.props;
  const { title, description, feature_list } = key_features;
  return renderTemplate`${maybeRenderHead()}<section class="section key-feature relative"> ${renderComponent($$result, "Image", $$Image, { "class": "absolute left-0 top-0 -z-[1] -translate-y-1/2", "src": "/images/feature-shape.png", "height": 126, "width": 63, "alt": "" })} <div class="container"> <div class="row justify-between text-center lg:text-start"> <div class="lg:col-5"> <h2>${unescapeHTML(markdownify(title))}</h2> </div> <div class="mt-6 lg:col-5 lg:mt-0"> <p>${unescapeHTML(markdownify(description))}</p> </div> </div> ${renderComponent($$result, "HomapageFeature", HomapageFeature, { "feature_list": feature_list, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/HomapageFeature", "client:component-export": "default" })} </div> </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/KeyFeatures.astro", void 0);

const HomepageTab = ({ homepage_tab: { tab_list, title, description } }) => {
  const [tab, setTab] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "tab gx-5 row items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "lg:col-7 lg:order-2", children: /* @__PURE__ */ jsx("div", { className: "tab-content", children: tab_list.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `tab-content-panel ${tab === index ? "active" : void 0}`,
        children: /* @__PURE__ */ jsx("img", { className: "w-full object-contain", src: item.image })
      },
      index
    )) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 lg:col-5 lg:order-1 lg:mt-0", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-container", children: [
        /* @__PURE__ */ jsx("h2", { className: "lg:text-4xl", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4", children: description }),
        /* @__PURE__ */ jsx("br", {}),
        "       "
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("br", {})
    ] })
  ] });
};

const VideoComponent = ({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width
}) => {
  const [play, setPlay] = useState(false);
  const videoOptions = {
    borderRadius: "16px",
    playerVars: {
      autoplay: 1
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: !play ? /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
    /* @__PURE__ */ jsx("button", { className: "video-play-btn", onClick: () => setPlay(true), children: /* @__PURE__ */ jsx(Play, {}) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        width,
        height,
        src,
        alt: title,
        className: "inline h-auto max-w-full rounded-2xl"
      }
    )
  ] }) : /* @__PURE__ */ jsx("div", { className: "youtube mx-auto text-center", children: /* @__PURE__ */ jsx(
    YouTube,
    {
      videoId: video_id,
      opts: videoOptions,
      iframeClassName: `  aspect-video ${video_height} ${video_width} max-w-full bg-transparent rounded-2xl`
    }
  ) }) });
};

const $$Astro = createAstro("https://stembotics.org");
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Service;
  const { service } = Astro2.props;
  const { homepage_tab, our_service } = service;
  return renderTemplate`${maybeRenderHead()}<section class="section services"> <div class="container"> ${renderComponent($$result, "HomepageTab", HomepageTab, { "client:load": true, "homepage_tab": homepage_tab, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/HomepageTab", "client:component-export": "default" })} ${our_service.map((item, index) => renderTemplate`<div class="gx-5 row mt-12 items-center lg:mt-0"> <div${addAttribute(`lg:col-7 ${index % 2 === 0 ? "order-0" : "order-1"}`, "class")}> ${item.image && renderTemplate`<div class="relative"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full object-contain", "alt": "service", "width": 667, "height": 498, "src": item.image })} ${renderComponent($$result, "Image", $$Image, { "class": "absolute bottom-6 left-1/2 -z-[1] -translate-x-1/2", "src": "/images/shape-2.png", "alt": "", "height": 147, "width": 151 })} </div>`} ${item.video && renderTemplate`${renderComponent($$result, "VideoComponent", VideoComponent, { "client:load": true, "src": item.video.thumbnail, "height": 370, "width": 700, "title": item.title, "video_id": item.video.video_id, "video_width": "w-[700px]", "video_height": "h-[370px]", "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/VideoComponent", "client:component-export": "default" })}`} </div> <div${addAttribute(`mt-6 lg:col-5 lg:mt-0 ${index % 2 === 0 ? "order-1" : "order-0"}`, "class")}> <div class="text-container"> <h2 class="lg:text-4xl">${item.title}</h2> <p class="mt-4">${item.description}</p> ${item.button && item.button.enable && renderTemplate`<a class="btn btn-white mt-6"${addAttribute(item.button.link, "href")}> ${item.button.label} </a>`} <ul class="mt-6 text-dark lg:-ml-4"> ${item.list && item.list.map((list) => renderTemplate`<li class="mb-2 flex items-center rounded px-4"> ${renderComponent($$result, "AiFillCheckCircle", AiFillCheckCircle, { "className": "mr-3 fill-primary text-white" })} ${list} </li>`)} </ul> </div> </div> </div>`)} </div> </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/Service.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await getEntryBySlug("homepage", "index");
  const { banner, key_features, service, testimonial } = homepage.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "banner": banner })}  ${renderComponent($$result2, "KeyFeatures", $$KeyFeatures, { "key_features": key_features })}  ${renderComponent($$result2, "Service", $$Service, { "service": service })}    ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/index.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { JobPosts as J, Notice as N, index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
