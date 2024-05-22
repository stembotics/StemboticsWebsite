/* empty css                              */
import { e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { a as $$PageHeader } from './_category__bYZtMlhs.mjs';
import { b as getEntryBySlug, a as $$Base, $ as $$Image, c as config } from './404_BlBkARjQ.mjs';
import '../astro/assets-service_BtMcE9EN.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntryBySlug("contact", "index");
  const { contact_form_action } = config.params;
  const contact = entry.data;
  const page_data = {
    ...contact,
    content: contact.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": contact.title, "meta_title": contact.meta_title, "description": contact.description, "image": contact.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero pb-6 pt-16"> <div class="container">${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })}</div> </section> <section class="section pt-0"> <div class="container"> <div class="row"> <div class="mb-10 text-center md:col-6 md:order-2 md:mb-0 md:pt-9"> <div class="contact-img relative inline-flex pb-5 pl-5"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/contact-img.png", "height": 544, "width": 500, "alt": "" })} ${renderComponent($$result2, "Image", $$Image, { "class": "absolute bottom-0 left-0 -z-[1] h-14 w-14", "src": "/images/shape-2.png", "alt": "", "height": 56, "width": 56 })} </div> </div> <div class="md:col-6 md:order-1"> <form data-netlify="true" class="lg:max-w-[484px]"${addAttribute(contact_form_action, "action")} method="POST"> <div class="form-group mb-5"> <label class="form-label" for="name">Full Name</label> <input class="form-control" type="text" id="name" name="name" placeholder="Your Full Name" required> </div> <div class="form-group mb-5"> <label class="form-label" for="email">Email Address</label> <input class="form-control" type="email" id="email" name="email" placeholder="Your Email Address" required> </div> <div class="form-group mb-5"> <label class="form-label" for="reason">Reason/Purpose</label> <select name="reason" id="reason" class="form-select" required> <option value="">Select reason/purpose</option> <option value="course_inquiry">Course Inquiry</option> <option value="admission_details">Admission Details</option> <option value="partnership_opportunity">Partnership Opportunity</option> <option value="general_question">General Question</option> </select> </div> <div class="form-group mb-5"> <label class="form-label" for="message">Message</label> <textarea class="form-control h-[150px]" id="message" name="message" cols="30" rows="10" placeholder="Your message here" required></textarea> </div> <input class="btn btn-primary block w-full" type="submit" value="Send Message"> </form> </div> </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/contact.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
