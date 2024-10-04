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
  "title": "Advanced Robotics",
  "excerpt": "Join a six-week course to master autonomous navigation, AI integration, and real-world robotic applications.",
  "job_nature": "$150",
  "location": "Mount Laurel",
  "categories": ["Robotics & Automation"],
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
      children: "Explore advanced robotics concepts such as AI integration, autonomous navigation, and more complex robotic systems. Participants will learn how to apply cutting-edge technologies in real-world scenarios, focusing on industrial and practical uses."
    }), "\n", createVNode(_components.h3, {
      id: "expected-curriculum",
      children: "Expected Curriculum"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Week 1:"
      }), " Overview of advanced robotics: Understanding the key areas of development."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Week 2:"
      }), " Autonomous navigation: How robots navigate in complex environments."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Week 3:"
      }), " AI integration in robotics: Using AI to enhance robotic systems."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Week 4:"
      }), " Robotics in industry: Applications and case studies."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Week 5:"
      }), " Programming for advanced robotics: Working with AI-based algorithms."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Week 6:"
      }), " Final Project: Students present a robotics project involving autonomy or AI."]
    }), "\n", createVNode(_components.h3, {
      id: "what-you-get",
      children: "What You Get"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1 hour session, every week, for 6 weeks."
      }), "\n", createVNode(_components.li, {
        children: "AI and navigation tools and software."
      }), "\n", createVNode(_components.li, {
        children: "Project-based mentorship."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pricing",
      children: "Pricing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "$150 for 6 weeks."
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
const url = "src/content/careers/advanced-robotics.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/advanced-robotics.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/advanced-robotics.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
