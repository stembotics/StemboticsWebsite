import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BN1N3Yq0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"page-not-found\">Page Not Found</h2>";

				const frontmatter = {"title":"Error 404"};
				const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/pages/404.md";
				const url = "/404";
				function rawContent() {
					return "\n## Page Not Found\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"page-not-found","text":"Page Not Found"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
