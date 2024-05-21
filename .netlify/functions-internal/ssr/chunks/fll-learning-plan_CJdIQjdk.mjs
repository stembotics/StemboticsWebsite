import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_CTCjbM0q.mjs';
import './astro/assets-service_BtMcE9EN.mjs';
import { $ as $$Image } from './pages/404_3uU1bBY2.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "title": "FLL Learning Plan",
  "excerpt": "Join our FLL Learning Plan to explore robotics using the LEGO Spike Prime kit and compete in FLL competitions.",
  "job_nature": "$100/month",
  "location": "Mount Laurel",
  "categories": ["fll"],
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
      children: "The FLL Learning Plan at Stembotics provides a hands-on robotics learning experience using the LEGO Spike Prime kit. Students will attend weekly sessions to build and program their robots."
    }), "\n", createVNode(_components.h3, {
      id: "competitions",
      children: "Competitions"
    }), "\n", createVNode(_components.p, {
      children: "Participants will have the chance to compete in organization-wide competitions every 2 months, enabling them to test their skills and collaborate with other teams."
    }), "\n", createVNode(_components.h3, {
      id: "what-you-get",
      children: "What You Get"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Weekly robotics learning sessions with LEGO Spike Prime kit"
      }), "\n", createVNode(_components.li, {
        children: "Hands-on experience with building and programming"
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
const url = "src/content/careers/fll-learning-plan.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/fll-learning-plan.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/fll-learning-plan.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
