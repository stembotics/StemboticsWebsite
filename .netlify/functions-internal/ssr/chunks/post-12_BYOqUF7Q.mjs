import { _ as __astro_tag_component__, i as Fragment, v as createVNode } from './astro_CTCjbM0q.mjs';
import './astro/assets-service_BtMcE9EN.mjs';
import { $ as $$Image } from './pages/404_CQftGjMR.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import { B as Blockquote } from './Blockquote_BFSER3M0.mjs';
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "title": "6 Product Launch Email Examples You\u2019ll Want to Steal",
  "subtitle": "Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet,",
  "image": "/images/posts/post-4.png",
  "author": "Abdullah Al Shifat",
  "date": "2022-04-05T05:00:00.000Z",
  "categories": ["development"],
  "featured": true,
  "draft": false
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Laoreet mauris odio ut nec. Nisl, sed adipiscing dignissim arcu placerat ornare pharetra nec in. Ultrices in nisl potenti vitae tempus. Auctor consectetur luctus eu in amet sagittis. Dis urna, vel hendrerit convallis Senectus feugiat faucibus commodo egestas leo vitae in morbi. Enim arcu dignissim mauris, eu, eget"
    }), "\n", createVNode(_components.p, {
      children: "Pharetra odio amet pellentesque. Egestas nisi adipiscing sed in lectus. Vitae ultrices malesuada aliquet Faucibus consectetur tempus adipiscing vitae. Nec blandit tincidunt nibh nisi, quam volutpat. In lacus laoreet diam risus. Mauris, risus faucibus sagittis sagittis tincidunt id justo. Diam massa pretium consequat mauris viverra. Sagittis eu libero"
    }), "\n", createVNode(Blockquote, {
      name: "Alexender Smith",
      children: createVNode(_components.p, {
        children: "A wise girls her limit to touch.To Repellat neque praesentium .The me an idea,\nso I as quickly To get."
      })
    }), "\n", createVNode(_components.p, {
      children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec et ipsum ullamcorper venenatis fringilla. Pretium, purus eu nec vulputate vel habitant egestas. Congue ornare at ipsum, viverra. Vitae magna faucibus eros, lectus sociis. Etiam nunc amet id dignissim. Feugiat id tempor vel sit in ornare turpis posuere. Eu quisque integer non rhoncus elementum vel. Quis nec viverra lectus augue nec praesent volutpat tortor. Ipsum eget sed tempus luctus nisl. Ut etiam molestie mattis at faucibus mi at pellentesque. Pellentesque morbi nunc, curabitur arcu euismod suscipit. Duis mi sapien, nisl, pulvinar donec non dictum"
    }), "\n", createVNode(_components.p, {
      children: "Laoreet mauris odio ut nec. Nisl, sed adipiscing dignissim arcu placerat ornare pharetra nec in. Ultrices in nisl potenti vitae tempus. Auctor consectetur luctus eu in amet sagittis. Dis urna, vel hendrerit convallis cursus id.\nSenectus feugiat faucibus commodo egestas leo vitae in morbi. Enim arcu dignissim mauris, eu, eget pharetra odio amet pellentesque. Egestas nisi adipiscing sed in lectus. Vitae ultrices malesuada aliquet dignissim. Faucibus non tristique eu."
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
const url = "src/content/blog/post-12.mdx";
const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/blog/post-12.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/blog/post-12.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
