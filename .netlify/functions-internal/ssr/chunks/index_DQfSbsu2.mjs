import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CTCjbM0q.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"About","page_title":"About Stembotics: Empowering Future Innovators","buttons":[{"label":"Check out our Programs","link":"/pricing","enable":true},{"label":"Learn More","link":"/pricing","outline":true,"enable":false}],"counter":[{"name":"Students","number":25,"messurment":"M","color":"#A3A1FB"},{"name":"Teams","number":2,"messurment":"M","color":"#5EE2A0"},{"name":"Locations","number":1,"messurment":"K","color":"#FE6019"},{"name":"Events","number":4,"messurment":"K","color":"#FEC163"}],"gallery":{"title":"Our Journey in Pictures, Empowering Future Innovators","images":["/images/about/gallery-img-1.png","/images/about/gallery-img-3.png","/images/about/gallery-img-2.png"]},"features":{"title":"The Six Core Values Driving Everything We Do","button":{"label":"Contact Us","link":"/contact","enable":true},"features_list":[{"title":"Education","content":"We believe in providing STEM education opportunities to all aspiring innovators."},{"title":"Empowerment","content":"We empower individuals to explore their potential and pursue their passions in STEM."},{"title":"Excellence","content":"We strive for excellence in everything we do, from curriculum design to mentorship."},{"title":"Innovation","content":"We foster a culture of innovation, encouraging creativity and out-of-the-box thinking."},{"title":"Collaboration","content":"We believe in the power of collaboration, building bridges between diverse minds."},{"title":"Impact","content":"We measure success not just by achievements, but by the positive impact we make on society."}]}};
				const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/about/index.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
