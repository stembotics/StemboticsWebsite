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
  "title": "Building Autonomous Robots",
  "excerpt": "Join a six-week course to design, build, and program your own robots that can move and perform tasks on their own!",
  "job_nature": "$150",
  "location": "Mount Laurel",
  "categories": ["Autonomous Vehicles & Drones"],
  "date": "2025-02-17T00:00:00.000Z",
  "draft": true
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
      children: "This hands-on course introduces students to the exciting world of robotics. We\u2019ll build and program simple autonomous robots using age-appropriate tools and platforms. The complexity of projects will be adapted for different age groups within K-8."
    }), "\n", createVNode(_components.h3, {
      id: "expected-curriculum",
      children: "Expected Curriculum"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 1:"
        }), " Introduction to Robotics:  What are robots, and what can they do?"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 2:"
        }), "  Building Your Robot:  Assembling a robot platform using LEGOs, other building kits, or pre-assembled robots."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 3:"
        }), "  Introduction to Programming:  Using block-based programming languages to control the robot\u2019s movements."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 4:"
        }), "  Sensors and Control:  Adding sensors (e.g., touch sensors, light sensors) and programming the robot to respond to its environment."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 5:"
        }), "  Autonomous Navigation:  Programming the robot to move autonomously (e.g., follow a line, avoid obstacles)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 6:"
        }), "  Robotics Challenge:  Putting our skills to the test in a fun robotics challenge."]
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
const url = "src/content/careers/building-auto-robots.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/building-auto-robots.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/building-auto-robots.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
