/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { a as $$Base } from './404_BlBkARjQ.mjs';
import sheetdb from 'sheetdb-node';
import Stripe from 'stripe';

const $$Astro = createAstro("https://stembotics.org");
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const stripe = new Stripe("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");
  const customers = await stripe.customers.list({
    limit: 20
  });
  customers["data"];
  var config = {
    address: "210dinh2sfzez",
    auth_login: "t4gsnkhy",
    auth_password: "9kum7wyoyvosjnz5vb0a"
  };
  sheetdb(config);
  if (Astro2.cookies.has("id")) {
    let id = Astro2.cookies.get("id");
    if (id?.value !== "ADMIN") {
      return Astro2.redirect("/signup");
    }
  } else {
    return Astro2.redirect("/signup");
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container max-w-full"> <div class="page-hero-content mx-auto max-w-[768px] text-center"> <h1>Welcome, Admin</h1> <br> </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin.astro", void 0);
const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin.astro";
const $$url = "/admin";

export { $$Admin as default, $$file as file, $$url as url };
