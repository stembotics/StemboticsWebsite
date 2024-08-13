/* empty css                              */
import { e as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, d as createAstro, h as renderComponent, u as unescapeHTML } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import '../astro/assets-service_BtMcE9EN.mjs';
import { c as config, $ as $$Image, h as humanize, m as markdownify, b as getEntryBySlug, a as $$Base } from './404_BnvD97VY.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { marked } from 'marked';
import { useState } from 'react';
import * as Icon from 'react-feather';
import { $ as $$Shape } from './_category__dUwFwPKo.mjs';
import 'clsx';
import { AiFillCheckCircle } from 'react-icons/ai';

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  const {
    call_to_action: {
      title,
      description,
      button: { label, link }
    }
  } = config;
  return renderTemplate`${maybeRenderHead()}<section class="px-5 py-20 xl:py-[120px]"> <div class="container"> <div class="bg-gradient row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16"> <div class="lg:col-11"> <div class="row"> <div class="lg:col-7"> <h2 class="h1 text-white">${title}</h2> <a class="btn btn-white mt-8"${addAttribute(link, "href")}>${label}</a> </div> <div class="mt-8 lg:col-5 lg:mt-0"> <p class="text-white"> ${description} </p> </div> </div> </div> </div> </div> </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/partials/Cta.astro", void 0);

const $$Astro$1 = createAstro("https://stembotics.org");
const $$FeatureBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureBanner;
  const {
    features: { title, banner }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row"> <div class="mb-14 text-center lg:col-6 lg:order-1 lg:mb-0 lg:mt-0 lg:text-left"> <ul class="breadcrumb mb-8 inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2"> <li class="leading-none text-dark"> <a class="inline-flex items-center text-primary" href="/"> <svg class="mr-1.5" width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z" fill="black"></path> </svg> <span class="text-sm leading-none">Home</span> </a> </li> <li class="leading-none text-dark"> <span class="text-sm leading-none">/ ${title}</span> </li> </ul> <h1> ${banner.title} </h1> <p class="mt-6"> ${banner.content} </p> ${banner.button.enable && renderTemplate`<a class="btn btn-primary mt-6"${addAttribute(banner.button.link, "href")}> ${banner.button.label} </a>`} </div> <div class="lg:col-6 lg:order-2"> ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto", "src": `${banner.image}`, "width": 612, "height": 483, "alt": "" })} </div> </div> </div> </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/features/FeatureBanner.astro", void 0);

const FeatureTab = ({ feature_tab }) => {
  const [tab, setTab] = useState(0);
  return /* @__PURE__ */ jsxs("div", { className: "row mt-[120px] items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "col-8 mx-auto mb-10 text-center", children: /* @__PURE__ */ jsx(
      "h2",
      {
        dangerouslySetInnerHTML: {
          __html: marked.parseInline(feature_tab.title)
        }
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-6", children: feature_tab.list.map((item, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `features-tab-penel ${tab === index ? "active" : void 0} relative`,
        children: /* @__PURE__ */ jsx("img", { className: "w-full object-contain", src: item.image })
      },
      `item-${index}`
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 lg:col-6 lg:mt-0", children: /* @__PURE__ */ jsx("div", { className: "lg:max-w-[473px]", children: feature_tab.list.map((item, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `features-tab-item ${tab === index ? "active" : void 0} mt-9 first:mt-0`,
        children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "lg:text-2xl",
              dangerouslySetInnerHTML: {
                __html: marked.parseInline(item.title)
              },
              onClick: () => setTab(index)
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4", children: item.content })
        ]
      },
      index
    )) }) })
  ] });
};

const Projects = ({ projects }) => {
  return /* @__PURE__ */ jsx("div", { className: "col-12 ", children: /* @__PURE__ */ jsx("div", { className: "row", children: projects.map((item, i) => {
    const FeatherIcon = Icon[humanize(item.icon)];
    return /* @__PURE__ */ jsx("div", { className: "lg:col-6", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8 lg:mt-6  ${projects.length - 1 === i ? "mb-0" : "mb-6 "} `,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative inline-flex h-24 w-24 items-center justify-center p-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "project-icon text-[#44d498]", children: [
              " ",
              /* @__PURE__ */ jsx(FeatherIcon, { className: "font-semibold" })
            ] }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "absolute left-0 top-0 h-full w-full",
                width: "90",
                height: "90",
                viewBox: "0 0 90 90",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    opacity: "0.1",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z",
                    fill: "#FFCC99"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "h5 font-primary", children: item.title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
              item.content,
              " "
            ] })
          ] })
        ]
      }
    ) }, `item-${i}`);
  }) }) });
};

const $$Astro = createAstro("https://stembotics.org");
const $$ProjecManagement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjecManagement;
  const {
    features: {
      project_management: {
        title,
        content,
        management,
        feature_service,
        feature_tab
      }
    }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section features pb-0"> <div class="container"> <div class="row"> <div class="mx-auto text-center lg:col-7"> <h2>${unescapeHTML(markdownify(title))}</h2> <p class="mt-4">${unescapeHTML(markdownify(content))}</p> </div> </div> <div class="p mt-14 rounded-xl bg-white p-6 shadow-lg lg:px-12 lg:py-16"> <div class="row"> ${renderComponent($$result, "Projects", Projects, { "client:load": true, "projects": management.projects, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/Projects", "client:component-export": "default" })} </div> </div> <!-- <FeatureService feature_service={feature_service} /> --> ${renderComponent($$result, "FeatureTab", FeatureTab, { "client:load": true, "feature_tab": feature_tab, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/FeatureTab", "client:component-export": "default" })} </div> </section>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/components/features/ProjecManagement.astro", void 0);

const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const features = await getEntryBySlug("features", "index");
  const { perfomance, our_works } = features.data;
  ({
    ...features.data,
    content: features.body
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": features.data.title, "meta_title": features.data.meta_title, "description": features.data.description, "image": features.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FeatureBanner", $$FeatureBanner, { "features": features.data })} ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> <div class="row mt-14"> ${perfomance.map((item, i) => renderTemplate`<div class="mt-10 text-center sm:col-6 md:col-4 md:mb-0"> <div${addAttribute(`relative mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg ${perfomance.length - 1 !== i ? "after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full after:translate-x-full after:border-b-2 after:border-dashed after:border-primary/50 after:content-[''] md:after:block" : void 0}`, "class")}> ${renderComponent($$result2, "Image", $$Image, { "height": 122, "width": 144, "src": item.image, "alt": "" })} </div> <h2 class="h5">${item.title}</h2> <p class="mt-4">${item.description}</p> </div>`)} </div> </div> </section> <section> <div class="container"> ${our_works.map((item, index) => renderTemplate`<div class="gx-5 row mt-16 items-center first:mt-12"> <div${addAttribute(`lg:col-7 ${index % 2 === 0 ? "lg:order-1" : "lg:order-0"}`, "class")}> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "class": "w-full object-contain", "alt": "service", "width": 473, "height": 286, "src": item.image })} </div> </div> <div${addAttribute(`mt-6 lg:col-5 lg:mt-0 ${index % 2 === 0 ? "lg:order-0" : "lg:order-1"}`, "class")}> <div class="text-container"> <h2 class="lg:text-4xl">${item.title}</h2> <ul class="mt-6 text-dark lg:-ml-4"> ${item.list.map((list) => renderTemplate`<li class="mb-2 flex items-center rounded px-4"> ${renderComponent($$result2, "AiFillCheckCircle", AiFillCheckCircle, { "className": "mr-3 fill-primary text-white" })} ${list} </li>`)} </ul> </div> </div> </div>`)} </div> </section> ${renderComponent($$result2, "ProjecManagement", $$ProjecManagement, { "features": features.data })} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/features.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/features.astro";
const $$url = "/features";

const features = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Features,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Cta as $, $$FeatureBanner as a, features as f };
