import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BN1N3Yq0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Ready to embark on your STEM journey? <br>Join us at Stembotics and discover the endless possibilities that await!</p>";

				const frontmatter = {"title":"Programs","page_title":"Unleash Your Inner Innovator","pricing_card":[{"title":"VEX IQ Learning Plan","pre_currency":"$","post_currency":"/Month","price":100,"icon":"box","description":"Get hands-on with robotics! Learn the fundamentals of building, programming, and problem-solving with the VEX IQ platform. Perfect for beginners (ages 9+).","featured":false,"buttons":{"buy_now":{"label":"Currently unavailable","link":"/portal"},"free_trial":{"label":"Learn More","link":"/career/vex-learning-plan"}},"services":{"title":"What's included?","list":["Introduction to VEX IQ robotics system","Build and program basic robots","Develop critical thinking and problem-solving skills","Fun and engaging learning environment"]}},{"title":"VEX IQ Competition Package","pre_currency":"$","post_currency":"per Month (4 months)","price":160,"icon":"table","description":"Take your robotics skills to the next level! Prepare for VEX IQ competitions by learning advanced programming techniques, teamwork, and strategic thinking. VEX IQ Learning Plan Required. (ages 10+)","featured":true,"buttons":{"buy_now":{"label":"Enroll Now","link":"/portal"},"free_trial":{"label":"Learn More","link":"/career/vex-comp-pack"}},"services":{"title":"What's included?","list":["Advanced VEX IQ programming and robotics concepts","Competition preparation and strategy development","Teamwork and communication skills","Experienced coaches and mentors"]}}],"faq":{"title":"Frequently Asked Questions","description":"Have a question about our programs? We've got answers!","faq_list":[{"title":"What are the age requirements for each program?","content":"VEX IQ Learning is ideal for ages 9+, VEX IQ Competitive is recommended for ages 10+, and FLL Plan is designed for ages 9-16."},{"title":"Do I need prior robotics experience?","content":"No prior experience is necessary for VEX IQ Learning. VEX IQ Competitive and FLL Plan are geared towards students with a foundational understanding of robotics concepts."},{"title":"What are the team sizes?","content":"Our teans are capped at a small size (5 students for VEX, 7 students for FLL) to ensure personalized attention for each student."},{"title":"What are the competition opportunities?","content":"VEX IQ Competitive prepares students for local and regional VEX IQ competitions. FLL Plan specifically focuses on the FIRST® LEGO® League Challenge."}]},"career":{"title":"All Programs","subtitle":""}};
				const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/pricing/index.md";
				const url = undefined;
				function rawContent() {
					return "Ready to embark on your STEM journey? <br>Join us at Stembotics and discover the endless possibilities that await!\n\n";
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