import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_CTCjbM0q.mjs';
import './astro/assets-service_BtMcE9EN.mjs';
import { $ as $$Image } from './pages/404_DxqyuYqi.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "title": "The greatest post of all time",
  "author": "Ben"
};
function getHeadings() {
  return [];
}
const description = "Get comfortable! This is going to be a great read.";
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    em: "em",
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: ["Here is my ", createVNode(_components.em, {
      children: "great"
    }), " post!"]
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
const url = "src/content/admin/index.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/admin/index.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/admin/index.mdx";

export { Content, __usesAstroImage, Content as default, description, file, frontmatter, getHeadings, url };
