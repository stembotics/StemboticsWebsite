import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BN1N3Yq0.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Red Watch","banner":{"title":"Red Watch Robotics","content":"At Stembotics, Red Watch Robotics serves as our parent organization, dedicated to going beyond textbooks and providing a fun and engaging environment for students to learn STEM fundamentals through hands-on robotics exploration. Join us in our mission to inspire young minds and prepare them for the future of technology.","image":"https://simplyk-bucket-production.s3.ca-central-1.amazonaws.com/organizations/c/4/4/c/c44c7343-21cc-4f76-900c-2f737ad609dc/22e43c84-3c55-4d12-b708-83f51ae16820.png","button":{"label":"Visit their site!","link":"https://redwatchrobotics.com","enable":true}},"our_works":[{"title":"Who are they","image":"https://www.redwatchrobotics.com/assets/awardPhoto2024-6479187f.png","list":["FRC Team 2720, also known as Red Watch Robotics, is a robotics team based in Medford, New Jersey.","Our team of Lenape High School students use STEM and gracious professionalism to create functioning and innovative robots.","Clap clap whoosh!"]},{"title":"Their History","image":"https://www.redwatchrobotics.com/assets/crescendo8-2e3dd8ec.jpg","list":["From 2009 to 2021, we were part of Team 2729, Storm Robotics.","It was a joint team between Lenape and Cherokee High Schools, making up an average of about 80 students our rookie year.","In 2022 however, we split into two teams, Red Watch (FRC 2720) and Charge (FRC 2722)."]},{"title":"Our future together","image":"https://www.redwatchrobotics.com/assets/crescendo11-6c96ed65.jpg","list":["We plan to have many events together with Red Watch and combined with them we can bring STEM education back to the Mount Laurel Area.","Red Watch is determined to create an environment where kids can follow their dreams. Whether it be a scientist, an artist, a musician, an engineer, we want to provide!"]}]};
				const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/red-watch/index.md";
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
