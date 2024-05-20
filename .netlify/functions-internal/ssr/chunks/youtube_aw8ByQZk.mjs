import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_CTCjbM0q.mjs';
import './astro/assets-service_BtMcE9EN.mjs';
import { $ as $$Image } from './pages/404_Ce0m3FIs.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "name": "youtube",
  "title": "Youtube Integrations",
  "excerpt": "We are looking for a personal financial planning pro Certified Financial Planner preferred who will lead our client advising efforts. You will be a fiduciary who works",
  "image": "/images/integrations/youtube.png",
  "categories": ["streaming"],
  "button": {
    "label": "integrate",
    "link": "#"
  },
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 4,
    "slug": "how-to-connect-your-store-with-youtube",
    "text": "How to connect your store with YouTube"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h4, {
      id: "how-to-connect-your-store-with-youtube",
      children: "How to connect your store with YouTube"
    }), "\n", createVNode(_components.p, {
      children: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Donec sollicitudin"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Enhance or improve User experience, our Site, or our Service."
      }), "\n", createVNode(_components.li, {
        children: "Process transactions."
      }), "\n", createVNode(_components.li, {
        children: "Send emails about our Site or respond to inquiries."
      }), "\n", createVNode(_components.li, {
        children: "Send emails and updates about Conclude, including news and\nrequests for agreement to amended legal documents such"
      }), "\n", createVNode(_components.li, {
        children: "Perform any other function that we believe in good is necessary\nto protect the or proper functioning of our Site or Service."
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
const url = "src/content/integrations/youtube.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/integrations/youtube.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/integrations/youtube.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
