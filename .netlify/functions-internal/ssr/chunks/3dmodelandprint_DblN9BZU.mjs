import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_BN1N3Yq0.mjs';
import './astro/assets-service_CnD27BNI.mjs';
import { $ as $$Image } from './pages/404_ZRzUwij7.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "title": "3D Modeling & Printing",
  "excerpt": "Join a six-week course to learn to design and print 3D objects.",
  "job_nature": "$150",
  "location": "Mount Laurel",
  "categories": ["Engineering & Design"],
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
    br: "br",
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
      children: "This course teaches the fundamentals of 3D modeling and printing, enabling participants to design and print their own objects. Students will explore different types of 3D printers, software, and materials used in additive manufacturing."
    }), "\n", createVNode(_components.h3, {
      id: "expected-curriculum",
      children: "Expected Curriculum"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Week 1:"
      }), " Introduction to 3D printing technology and software.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Week 2:"
      }), " Basics of 3D modeling: Creating simple designs in CAD software.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Week 3:"
      }), " Refining your designs: Adding details and optimizing for printing.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Week 4:"
      }), " Preparing files for 3D printing: Understanding slicing software.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Week 5:"
      }), " Printing your design: Using a 3D printer to bring your model to life.", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Week 6:"
      }), " Final Project: Showcasing a 3D printed object of your own design."]
    }), "\n", createVNode(_components.h3, {
      id: "what-you-get",
      children: "What You Get"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "1 hour session, every week, for 6 weeks."
      }), "\n", createVNode(_components.li, {
        children: "Access to 3D printers and CAD software."
      }), "\n", createVNode(_components.li, {
        children: "Printing materials for one project."
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
const url = "src/content/careers/3dmodelandprint.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/3dmodelandprint.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/3dmodelandprint.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };