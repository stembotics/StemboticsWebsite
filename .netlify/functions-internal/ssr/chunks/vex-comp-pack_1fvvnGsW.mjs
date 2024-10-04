import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_BN1N3Yq0.mjs';
import './astro/assets-service_CnD27BNI.mjs';
import { $ as $$Image } from './pages/404_mW7yNKop.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import { C as Changelog, B as Badge } from './Changelog_DGc-79VW.mjs';
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "title": "VEX Competition Package",
  "excerpt": "Enhance your VEX Learning Plan with the Competition Package to participate in VEX IQ competitions.",
  "job_nature": "$160 per Season (year)",
  "location": "Mount Laurel",
  "categories": ["vex"],
  "date": "2024-05-01T00:00:00.000Z",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "package-overview",
    "text": "Package Overview"
  }, {
    "depth": 3,
    "slug": "requirements",
    "text": "Requirements"
  }, {
    "depth": 3,
    "slug": "what-you-get",
    "text": "What You Get"
  }, {
    "depth": 3,
    "slug": "pricing",
    "text": "Pricing"
  }, {
    "depth": 3,
    "slug": "dates",
    "text": "Dates"
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
      id: "package-overview",
      children: "Package Overview"
    }), "\n", createVNode(_components.p, {
      children: "The VEX Competition Package is an add-on to the VEX Learning Plan. It allows students to participate in the actual VEX IQ competitions, providing a platform to showcase their robotics skills on a larger stage."
    }), "\n", createVNode(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Must be enrolled in the VEX Learning Plan"
      }), "\n", createVNode(_components.li, {
        children: "Need a team of 4-5 people"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "what-you-get",
      children: "What You Get"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Entry to VEX IQ competitions"
      }), "\n", createVNode(_components.li, {
        children: "Additional preparation and support for competitions"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "pricing",
      children: "Pricing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "$150 per Season (year)"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "dates",
      children: "Dates"
    }), "\n", createVNode(Changelog, {
      date: "Apr-Aug",
      children: [createVNode(Badge, {
        type: "changed",
        children: "Registration"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Enroll in the VEX Learning Plan."
        }), "\n", createVNode(_components.li, {
          children: "Attend weekly robotics learning sessions."
        }), "\n", createVNode(_components.li, {
          children: "Start learning and building foundational robotics skills."
        }), "\n", createVNode(_components.li, {
          children: "Begin initial team formation and collaboration exercises."
        }), "\n", createVNode(_components.li, {
          children: "Receive introductory materials and kits (VEX or LEGO Spike Prime)."
        }), "\n"]
      })]
    }), "\n", createVNode(Changelog, {
      date: "Sept-Jan",
      children: [createVNode(Badge, {
        type: "changed",
        children: "Competition Season"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Continue attending weekly robotics sessions."
        }), "\n", createVNode(_components.li, {
          children: "Participate in local South Jersey VIQRC competitions."
        }), "\n", createVNode(_components.li, {
          children: "Refine and enhance robotic builds and programming."
        }), "\n", createVNode(_components.li, {
          children: "Develop and practice competition strategies."
        }), "\n", createVNode(_components.li, {
          children: "Engage in team-building activities and problem-solving exercises."
        }), "\n"]
      })]
    }), "\n", createVNode(Changelog, {
      date: "Jan-Mar",
      children: [createVNode(Badge, {
        type: "changed",
        children: "Regional Competitions"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Prepare for regional VEX IQ competitions."
        }), "\n", createVNode(_components.li, {
          children: "Intensify focus on competition preparation and advanced strategies."
        }), "\n", createVNode(_components.li, {
          children: "Compete in regional events against other teams."
        }), "\n", createVNode(_components.li, {
          children: "Receive feedback and improve robotic designs and code."
        }), "\n", createVNode(_components.li, {
          children: "Collaborate with team members to address competition challenges."
        }), "\n"]
      })]
    }), "\n", createVNode(Changelog, {
      date: "April",
      children: [createVNode(Badge, {
        type: "remove",
        children: "VEX Worlds"
      }), createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Finalize preparations for the VEX Worlds competition."
        }), "\n", createVNode(_components.li, {
          children: "Polish robotic builds and optimize programming."
        }), "\n", createVNode(_components.li, {
          children: "Travel to and compete in the VEX Worlds."
        }), "\n", createVNode(_components.li, {
          children: "Participate in workshops and network with other teams globally."
        }), "\n", createVNode(_components.li, {
          children: "Reflect on competition experiences and plan for future improvements."
        }), "\n"]
      })]
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
const url = "src/content/careers/vex-comp-pack.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/vex-comp-pack.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/careers/vex-comp-pack.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
