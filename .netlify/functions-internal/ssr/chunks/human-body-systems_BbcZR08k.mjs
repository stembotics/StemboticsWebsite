import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_BN1N3Yq0.mjs';
import './astro/assets-service_CnD27BNI.mjs';
import { $ as $$Image } from './pages/404_BSglNOG7.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "title": "Human Body Systems",
  "excerpt": "Join a six-week course for an overview of the major organ systems in the human body and how they function together.",
  "job_nature": "$150",
  "location": "Mount Laurel",
  "categories": ["Anatomy & Physiology"],
  "date": "2025-02-17T00:00:00.000Z",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "starting-date-tbd",
    "text": "Starting date: TBD"
  }, {
    "depth": 3,
    "slug": "course-overview",
    "text": "Course Overview"
  }, {
    "depth": 3,
    "slug": "expected-curriculum",
    "text": "Expected Curriculum"
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
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "starting-date-tbd",
      children: "Starting date: TBD"
    }), "\n", createVNode(_components.h3, {
      id: "course-overview",
      children: "Course Overview"
    }), "\n", createVNode(_components.p, {
      children: "This course provides a comprehensive overview of the human body\u2019s organ systems, including the circulatory, respiratory, digestive, nervous, and endocrine systems. Students will learn about the structure and function of each system and how they work together to maintain homeostasis."
    }), "\n", createVNode(_components.h3, {
      id: "expected-curriculum",
      children: "Expected Curriculum"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 1:"
        }), " Introduction to Anatomy and Physiology, Levels of Organization, Homeostasis."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 2:"
        }), " The Circulatory System, Heart, Blood Vessels, Blood."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 3:"
        }), " The Respiratory System, Lungs, Breathing, Gas Exchange."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 4:"
        }), " The Digestive System, Digestion, Absorption, Metabolism."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 5:"
        }), " The Nervous System, Brain, Spinal Cord, Nerves."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 6:"
        }), " The Endocrine System, Hormones, Regulation of Body Functions."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "what-you-get",
      children: "What You Get"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1 hour session, every week, for 6 weeks"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pricing",
      children: "Pricing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "$150 for 6 weeks"
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
const url = "src/content/careers/human-body-systems.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/human-body-systems.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/human-body-systems.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
