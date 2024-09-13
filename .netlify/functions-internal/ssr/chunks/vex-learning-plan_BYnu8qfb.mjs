import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_CTCjbM0q.mjs';
import './astro/assets-service_BtMcE9EN.mjs';
import { $ as $$Image } from './pages/404_Dyghi0-J.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "title": "VEX Learning Plan",
  "excerpt": "Join our VEX Learning Plan to dive into the world of robotics and compete in organization-wide competitions.",
  "job_nature": "$100/month",
  "location": "Mount Laurel",
  "categories": ["vex"],
  "date": "2024-05-01T00:00:00.000Z",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "plan-overview",
    "text": "Plan Overview"
  }, {
    "depth": 3,
    "slug": "competitions",
    "text": "Competitions"
  }, {
    "depth": 3,
    "slug": "what-you-get",
    "text": "What You Get"
  }, {
    "depth": 3,
    "slug": "pricing",
    "text": "Pricing"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "plan-overview",
      children: "Plan Overview"
    }), "\n", createVNode(_components.p, {
      children: "The VEX Learning Plan at Stembotics offers a comprehensive robotics learning experience. Students will go in once every week to learn about robotics and engage in hands-on activities."
    }), "\n", createVNode(_components.h3, {
      id: "competitions",
      children: "Competitions"
    }), "\n", createVNode(_components.p, {
      children: "Participants will have the opportunity to compete in organization-wide competitions every 2 months, allowing them to apply their skills and learn from peers."
    }), "\n", createVNode(_components.h3, {
      id: "what-you-get",
      children: "What You Get"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Weekly robotics learning sessions"
      }), "\n", createVNode(_components.li, {
        children: "Hands-on experience with VEX kits"
      }), "\n", createVNode(_components.li, {
        children: "Bi-monthly competitions"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pricing",
      children: "Pricing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "$100/month"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/careers/vex-learning-plan.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/vex-learning-plan.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/vex-learning-plan.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
