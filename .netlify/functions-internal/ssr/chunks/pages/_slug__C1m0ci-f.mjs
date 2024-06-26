/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { g as getSinglePage, $ as $$Shape, a as $$PageHeader, b as $$Blogs } from './_category__BAL59Dpf.mjs';
import { c as config, b as getEntryBySlug, a as $$Base } from './404_1a20QiAo.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://stembotics.org");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { section, currentPage, totalPages } = Astro2.props;
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;
  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }
  return renderTemplate`${totalPages > 1 && renderTemplate`${maybeRenderHead()}<nav class="mb-4 mt-14 flex items-center justify-center" aria-label="Pagination">${hasPrevPage ? renderTemplate`<a${addAttribute(
    indexPageLink ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${currentPage - 1}`,
    "href"
  )} class="mr-5 flex items-center rounded-full border px-4 py-2 text-dark hover:shadow-lg md:px-6 md:py-3"><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>Previous</span></a>` : renderTemplate`<span class="  mr-5 flex min-w-[150px] items-center rounded-[50px] border-white bg-white px-4 py-2 text-center capitalize text-text md:px-6 md:py-3 "><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span>Previous</span></span>`}${pageList.map(
    (pagination, i) => pagination === currentPage ? renderTemplate`<span aria-current="page"${addAttribute(`mx-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white md:h-12  md:w-12`, "class")}>${pagination}</span>` : renderTemplate`<a${addAttribute(
      i === 0 ? `${section ? "/" + section : "/"}` : `${section ? "/" + section : ""}/page/${pagination}`,
      "href"
    )} aria-current="page"${addAttribute(`mx-1 flex h-10 w-10 items-center justify-center rounded-full border bg-white text-dark hover:bg-primary hover:text-white md:h-12 md:w-12 `, "class")}>${pagination}</a>`
  )}${hasNextPage ? renderTemplate`<a${addAttribute(`${section ? "/" + section : ""}/page/${currentPage + 1}`, "href")} class="ml-5 flex items-center rounded-full border px-4 py-2 text-dark hover:shadow-lg md:px-6 md:py-3"><span>Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></a>` : renderTemplate`<span class="  ml-5 flex min-w-0 items-center rounded-[50px]  border-white bg-white px-4 py-2 text-center capitalize text-text md:px-6 md:py-3 "><span>Next</span><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>`}</nav>`}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/Pagination.astro", void 0);

const sortByDate = (array) => {
  const sortedArray = array.sort(
    (a, b) => new Date(b.data.date && b.data.date) - new Date(a.data.date && a.data.date)
  );
  return sortedArray;
};

const $$Astro = createAstro("https://stembotics.org");
async function getStaticPaths() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const blogIndex = await getEntryBySlug(
    config.settings.blog_folder,
    "-index"
  );
  const { slug } = Astro2.params;
  const posts = await getSinglePage(config.settings.blog_folder);
  const sortedPosts = sortByDate(posts);
  const recentPost = sortedPosts.filter((item) => !item.data.featured);
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = recentPost.slice(indexOfFirstPost, indexOfLastPost);
  const page_data = {
    index_title: blogIndex.data.title,
    slug: `page / ${slug}`
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": blogIndex.data.title, "meta_title": blogIndex.data.meta_title, "description": blogIndex.data.description, "image": blogIndex.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> <section class="section"> <div class="container"> <h2 class="h4 mb-4">Recent Posts</h2> ${renderComponent($$result2, "Blogs", $$Blogs, { "posts": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": config.settings.blog_folder, "totalPages": totalPages, "currentPage": currentPage })} </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/blog/page/[slug].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/blog/page/[slug].astro";
const $$url = "/blog/page/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pagination as $, _slug_ as _, sortByDate as s };
