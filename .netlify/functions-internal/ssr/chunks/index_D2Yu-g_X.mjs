import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BN1N3Yq0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Enrollment","page_title":"Welcome, customer_name","buttons":[{"label":"Check out our Programs","link":"https://stembotics.org/pricing","enable":false},{"label":"Learn More","link":"https://stembotics.org/pricing","outline":true,"enable":false}],"features":{"title":"The Six Core Values Driving Everything We Do","button":{"label":"Download Our Brochure","link":"https://stembotics.org/about","enable":true},"features_list":[{"title":"Accessibility","content":"We believe in providing accessible education opportunities to all aspiring innovators."},{"title":"Empowerment","content":"We empower individuals to explore their potential and pursue their passions in STEM."},{"title":"Excellence","content":"We strive for excellence in everything we do, from curriculum design to mentorship."},{"title":"Innovation","content":"We foster a culture of innovation, encouraging creativity and out-of-the-box thinking."},{"title":"Collaboration","content":"We believe in the power of collaboration, building bridges between diverse minds."},{"title":"Impact","content":"We measure success not just by achievements, but by the positive impact we make on society."}]}};
				const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/portal/index.md";
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
