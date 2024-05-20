import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CnyVfoUF.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"banner":{"title":"Empowering Future Innovators with Stembotics","content":"Dive into the world of robotics and engineering with Stembotics' comprehensive learning platform.","image":"/images/banner-img.png","button":{"label":"Check out our programs","link":"/pricing","enable":true}},"key_features":{"title":"Key Features of Stembotics","description":"Discover the highlights of our program, designed to provide hands-on learning and real-world experience in robotics and engineering.","feature_list":[{"icon":"map","title":"Hands-On Learning","content":"Engage in practical projects to understand the fundamentals of robotics and engineering."},{"icon":"lock","title":"Competition Preparation","content":"Get ready to compete in regional and global robotics competitions with our specialized training programs."},{"icon":"link","title":"Expert Mentorship","content":"Learn from industry experts and experienced mentors who guide you through your robotics journey."},{"icon":"bell","title":"Community Collaboration","content":"Collaborate with like-minded peers and participate in team projects to enhance your learning experience."},{"icon":"monitor","title":"Coding and Programming","content":"Develop coding skills essential for robotics and automation through our tailored programming courses."}]},"service":{"homepage_tab":{"title":"Comprehensive Robotics Education","description":"Our platform offers a complete suite of tools and resources to help you excel in the field of robotics and engineering.","tab_list":[{"title":"Hands-On Workshops","icon":"lock","image":"/images/sells-by-country.png"},{"title":"Interactive Courses","icon":"clock","image":"/images/sells-by-country.png"},{"title":"Global Competitions","icon":"bell","image":"/images/sells-by-country.png"}]},"our_service":[{"title":"Robotics Workshops","description":"Participate in hands-on workshops to build and program your own robots, guided by our expert instructors.","image":"/images/collaboration.png","list":["Beginner to advanced levels","Industry-standard equipment","Real-world applications"]},{"title":"International Competitions","description":"Experience the thrill of competing on a global stage! Join us to participate in renowned international robotics competitions and showcase your skills.","video":{"thumbnail":"/images/intro-thumbnail.png","video_id":"DwzOM3morF4"},"button":{"label":"Get Involved","link":"/how-it-works","enable":true}}]},"testimonial":{"title":"What Our Participants Say","description":"Hear from our students and mentors about their experiences with the Stembotics program.","testimonial_list":[{"author":"Alex Johnson","avatar":"/images/users/user-5.png","organization":"Future Engineers","rating":"four","content":"Stembotics provided me with the skills and confidence to excel in robotics competitions. The mentors were incredibly supportive!"},{"author":"Sarah Lee","avatar":"/images/users/user-6.png","organization":"Tech Innovators","rating":"four","content":"The hands-on learning approach at Stembotics is fantastic. I loved working on real projects and seeing my ideas come to life."},{"author":"Michael Chen","avatar":"/images/users/user-2.png","organization":"RoboGenius","rating":"three","content":"The practical projects at Stembotics are well-structured and engaging. I could explore and experiment freely, enhancing my skills."},{"author":"Emily Davis","avatar":"/images/users/user-3.png","organization":"STEM Leaders","rating":"five","content":"Being part of the Stembotics community has been a great experience. The competitions were challenging but rewarding."},{"author":"David Kim","avatar":"/images/users/user-4.png","organization":"Robotics Champions","rating":"five","content":"Stembotics is the best platform for anyone serious about robotics. The mentorship and resources available are top-notch."}]}};
				const file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/content/homepage/index.md";
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
