/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, u as unescapeHTML, h as renderComponent } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import 'clsx';
import { s as slugify, h as humanize, m as markdownify, $ as $$Image, p as plainify, c as config, g as getCollection, a as $$Base } from './404_Dyghi0-J.mjs';
import '../astro/assets-service_BtMcE9EN.mjs';

const $$Astro$3 = createAstro("https://stembotics.org");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { page_data } = Astro2.props || {};
  const { title, index_title, page_title, slug, content } = page_data || {};
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <ul class="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2"> <li class="leading-none text-dark"> <a href="/" class="inline-flex items-center text-primary"> <svg class="mr-1.5" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z" fill="black"></path> </svg> <span class="text-sm leading-none">Home</span> </a> </li> <li class="leading-none text-dark"> ${index_title ? renderTemplate`<span class="text-sm leading-none">
/${" "} <a${addAttribute(`/${slugify(index_title)}`, "href")} class="text-primary"> ${index_title} </a>${" "}
/ ${page_title ? page_title : humanize(slug.replace("page /", ""))} </span>` : renderTemplate`<span class="text-sm leading-none">/ ${title}</span>`} </li> </ul> <h1 class="mb-5 mt-8">${unescapeHTML(markdownify(
    page_data?.page_title ? page_data?.page_title : page_data?.title
  ))}</h1> <p>${unescapeHTML(markdownify(content))}</p> ${page_data.buttons && renderTemplate`<div class="mt-11 justify-center sm:flex"> ${page_data.buttons.map(
    (button) => button?.enable && renderTemplate`<a${addAttribute(`btn m-3 block sm:inline-block ${button?.outline ? "btn-outline-primary" : "btn-primary"} `, "class")}${addAttribute(button?.link, "href")}> ${button?.label} </a>`
  )} </div>`} </div>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/PageHeader.astro", void 0);

const $$Shape = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "floating-bubble-1 absolute right-0 top-0", "src": "/images/floating-bubble-1.png", "alt": "", "height": 98, "width": 103 })} ${renderComponent($$result, "Image", $$Image, { "class": "floating-bubble-2 absolute left-0 top-[387px] -z-[1]", "src": "/images/floating-bubble-2.png", "alt": "", "height": 66, "width": 33 })} ${renderComponent($$result, "Image", $$Image, { "class": "floating-bubble-3 absolute right-0 top-[605px] -z-[1]", "src": "/images/floating-bubble-3.png", "alt": "", "height": 99, "width": 50 })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/Shape.astro", void 0);

const dateFormat = (datetime) => {
  const dateTime = new Date(datetime);
  const date = dateTime.toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  dateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  return date;
};

const readingTime = (content) => {
  const WPS = 275 / 60;
  let images = 0;
  const regex = /\w/;
  let words = content.split(" ").filter((word) => {
    if (word.includes("<img")) {
      images += 1;
    }
    return regex.test(word);
  }).length;
  let imageAdjust = images * 4;
  let imageSecs = 0;
  let imageFactor = 12;
  while (images) {
    imageSecs += imageFactor;
    if (imageFactor > 3) {
      imageFactor -= 1;
    }
    images -= 1;
  }
  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60);
  if (minutes < 10) {
    if (minutes < 2) {
      return "0" + minutes + ` Min read`;
    } else {
      return "0" + minutes + ` Mins read`;
    }
  } else {
    return minutes + ` Mins read`;
  }
};

const $$Astro$2 = createAstro("https://stembotics.org");
const $$Blogs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Blogs;
  const { summary_length } = config.settings;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row"> ${posts.map((item) => renderTemplate`<div class="mb-8 md:col-6 lg:col-4"> <div class="card"> ${renderComponent($$result, "Image", $$Image, { "class": "card-img", "width": 335, "height": 210, "src": item.data.image, "alt": "" })} <div class="card-content"> <div class="card-tags space-x-1"> ${item.data.categories.map((category) => renderTemplate`<a class="tag"${addAttribute(`/categories/${slugify(category)}`, "href")}> ${humanize(category)} </a>`)} </div> <h3 class="h4 card-title"> <a${addAttribute(`/blog/${item.slug}`, "href")}>${item.data.title}</a> </h3> <p class="mb-4 text-text"> ${plainify(item.body?.slice(0, Number(summary_length)))}...
</p> <div class="card-footer mt-6 flex space-x-4"> <span class="inline-flex items-center text-xs text-[#666]"> <svg class="mr-1.5" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12.5 2H11V0.375C11 0.16875 10.8313 0 10.625 0H9.375C9.16875 0 9 0.16875 9 0.375V2H5V0.375C5 0.16875 4.83125 0 4.625 0H3.375C3.16875 0 3 0.16875 3 0.375V2H1.5C0.671875 2 0 2.67188 0 3.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V3.5C14 2.67188 13.3281 2 12.5 2ZM12.3125 14.5H1.6875C1.58438 14.5 1.5 14.4156 1.5 14.3125V5H12.5V14.3125C12.5 14.4156 12.4156 14.5 12.3125 14.5Z" fill="#939393"></path> </svg> ${dateFormat(item.data.date)} </span> <span class="inline-flex items-center text-xs text-[#666]"> <svg class="mr-1.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.65217 0C3.42496 0 0 3.58065 0 8C0 12.4194 3.42496 16 7.65217 16C11.8794 16 15.3043 12.4194 15.3043 8C15.3043 3.58065 11.8794 0 7.65217 0ZM7.65217 14.4516C4.24264 14.4516 1.48107 11.5645 1.48107 8C1.48107 4.43548 4.24264 1.54839 7.65217 1.54839C11.0617 1.54839 13.8233 4.43548 13.8233 8C13.8233 11.5645 11.0617 14.4516 7.65217 14.4516ZM9.55905 11.0839L6.93941 9.09355C6.84376 9.01935 6.78822 8.90323 6.78822 8.78065V3.48387C6.78822 3.27097 6.95484 3.09677 7.15849 3.09677H8.14586C8.34951 3.09677 8.51613 3.27097 8.51613 3.48387V8.05484L10.5773 9.62258C10.7439 9.74839 10.7778 9.99032 10.6575 10.1645L10.0774 11C9.95708 11.171 9.72567 11.2097 9.55905 11.0839Z" fill="#939393"></path> </svg> ${readingTime(item.body)} </span> </div> </div> </div> </div>`)} </div>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/Blogs.astro", void 0);

const getSinglePage = async (collection) => {
  const allPage = await getCollection(collection);
  const removeIndex = allPage.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/lib/contentParser.astro", void 0);

const $$Astro$1 = createAstro("https://stembotics.org");
const $$BlogCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCategories;
  const { categories } = Astro2.props;
  const params = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<div class="category-filter mb-10 mt-3 rounded-xl bg-[#EEEEEE] p-4"> <ul class="filter-list flex flex-wrap items-center"> <li> <a${addAttribute(`filter-btn ${!params.category ? "filter-btn-active" : void 0} btn btn-sm`, "class")} href="/categories">All Categories</a> </li> ${categories.map((category) => renderTemplate`<li> <a${addAttribute(`filter-btn ${params.category === slugify(category) ? "filter-btn-active" : void 0} btn btn-sm`, "class")}${addAttribute(`/categories/${slugify(category)}`, "href")}> ${humanize(category)} </a> </li>`)} </ul> </div>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/blog/BlogCategories.astro", void 0);

const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(categoryArray[j]);
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/lib/taxonomyParser.astro", void 0);

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

const $$Astro = createAstro("https://stembotics.org");
async function getStaticPaths() {
  const categories = await getTaxonomy(
    config.settings.blog_folder,
    "categories"
  );
  return categories.map((item) => {
    const category = slugify(item);
    return {
      params: { category },
      props: {
        item
      }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const categories = await getTaxonomy(config.settings.blog_folder, "categories");
  const { category } = Astro2.params;
  const { item } = Astro2.props;
  const posts = await getSinglePage(config.settings.blog_folder);
  const filterByTags = taxonomyFilter(posts, "categories", category);
  const page_data = {
    index_title: "Categories",
    slug: item
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": category }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-8 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} <h1 class="h2 mb-14 text-center">
Showing posts from <span class="text-primary">${humanize(item)}</span> category
</h1> </div> </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} ${renderComponent($$result2, "Blogs", $$Blogs, { "posts": filterByTags })} </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/categories/[category].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _category_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Shape as $, _category_ as _, $$PageHeader as a, $$Blogs as b, getTaxonomy as c, dateFormat as d, $$BlogCategories as e, getSinglePage as g, readingTime as r };
