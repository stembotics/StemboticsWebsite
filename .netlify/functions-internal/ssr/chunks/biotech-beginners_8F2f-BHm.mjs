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
  "title": "Biotech for Beginners",
  "excerpt": "Join a six-week course for an exciting introduction to the world of biotechnology! Discover how scientists use living things to solve problems and create amazing new technologies.",
  "job_nature": "$150",
  "location": "Mount Laurel",
  "categories": ["Biotechnology & Health Innovation"],
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
    em: "em",
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
      children: ["This course introduces fundamental biotechnology concepts through engaging, age-appropriate activities and discussions. We\u2019ll explore how scientists use living organisms and their processes to develop new products and technologies in areas like medicine, agriculture, and environmental science. Ethical considerations will also be introduced in an age-appropriate manner. ", createVNode(_components.em, {
        children: "This topic requires careful adaptation for the K-8 age range. Some aspects of genetic engineering and cloning might be too complex or ethically sensitive for younger audiences."
      })]
    }), "\n", createVNode(_components.h3, {
      id: "expected-curriculum",
      children: "Expected Curriculum"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 1:"
        }), " What is Biotechnology? Exploring how people use living things (e.g., yeast for bread, bacteria for yogurt)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 2:"
        }), "  The Building Blocks of Life: A simple introduction to DNA, genes, and proteins."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 3:"
        }), "  Microscopic Helpers:  Learning about bacteria and other microorganisms used in biotechnology."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 4:"
        }), "  Biotechnology in Medicine:  Age-appropriate examples of how biotech is used to make medicines and vaccines."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 5:"
        }), "  Biotechnology in Agriculture:  Exploring how biotech is used to improve crops."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 6:"
        }), "  Ethical Considerations:  Age-appropriate discussions about the responsible use of biotechnology."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "what-you-get",
      children: "What You Get"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1-hour session, every week, for 6 weeks"
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
const url = "src/content/careers/biotech-beginners.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/biotech-beginners.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/biotech-beginners.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
