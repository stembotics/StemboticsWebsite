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
  "title": "Statistics for Data Science",
  "excerpt": "Join a six-week course to learn the basics of statistics and how to use data to answer questions and solve problems.",
  "job_nature": "$75",
  "location": "Mount Laurel",
  "categories": ["Mathematics for Innovators"],
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
      children: "This introductory course will teach students the basic concepts of statistics through fun, hands-on activities. We will explore collecting, organizing, representing, interpreting, and analyzing data to answer questions and solve problems."
    }), "\n", createVNode(_components.h3, {
      id: "expected-curriculum",
      children: "Expected Curriculum"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 1:"
        }), " What is Data?  Collecting and Organizing Data. Tally Marks, Tables."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 2:"
        }), " Representing Data: Picture Graphs and Bar Graphs."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 3:"
        }), "  Reading and Interpreting Graphs. Asking Questions about Data."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 4:"
        }), "  Line Plots and  Simple Data Analysis."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 5:"
        }), "  Mean, Median, Mode, and Range (introduced conceptually with examples)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Week 6:"
        }), "  Real-World Applications of Statistics. Fun Data Projects."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "what-you-get",
      children: "What You Get"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "30-minute session, every week, for 6 weeks"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pricing",
      children: "Pricing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "$75 for 6 weeks"
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
const url = "src/content/careers/stats-data-science.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/stats-data-science.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/stats-data-science.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
