/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { a as $$Base } from './404_64xs1Xd1.mjs';
import sheetdb from 'sheetdb-node';
import Stripe from 'stripe';
/* empty css                          */

const $$Astro = createAstro("https://stembotics.org");
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const stripe = new Stripe("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");
  const customers = await stripe.customers.list({
    limit: 20
  });
  let customerList = customers["data"];
  var config = {
    address: "210dinh2sfzez",
    auth_login: "t4gsnkhy",
    auth_password: "9kum7wyoyvosjnz5vb0a"
  };
  let customerCount = customerList.length;
  sheetdb(config);
  if (Astro2.cookies.has("id")) {
    let id = Astro2.cookies.get("id");
    if (id?.value !== "ADMIN") {
      return Astro2.redirect("/signup");
    }
  } else {
    return Astro2.redirect("/signup");
  }
  let tableHTML = "";
  for (var i = 0; i < customerCount; i++) {
    let temp = " <tr> <td>{id}</td><td>{email}</td><td>{name}</td><td>{childname}</td><td>{time}</td><td>{childage}</td></tr> ";
    temp = temp.replaceAll("{id}", customerList[i]["id"]);
    temp = temp.replaceAll("{email}", customerList[i]["email"]);
    temp = temp.replaceAll("{name}", customerList[i]["name"]);
    temp = temp.replaceAll("{childname}", customerList[i]["metadata"]["childName"]);
    temp = temp.replaceAll("{time}", customerList[i]["metadata"]["bestTimes"]);
    temp = temp.replaceAll("{childage}", customerList[i]["metadata"]["childAge"]);
    tableHTML = tableHTML + temp;
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "data-astro-cid-2zp6q64z": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section data-astro-cid-2zp6q64z><div class="container max-w-full" data-astro-cid-2zp6q64z><div class="page-hero-content mx-auto max-w-[1700px] text-center" data-astro-cid-2zp6q64z><h1 data-astro-cid-2zp6q64z>Welcome, Admin</h1><table class="text-black" data-astro-cid-2zp6q64z><tr data-astro-cid-2zp6q64z><td data-astro-cid-2zp6q64z>ID</td><td data-astro-cid-2zp6q64z>Email</td><td data-astro-cid-2zp6q64z>Name</td><td data-astro-cid-2zp6q64z>Child Name</td><td data-astro-cid-2zp6q64z>Best Times</td><td data-astro-cid-2zp6q64z>Child Age</td></tr><div data-astro-cid-2zp6q64z>${unescapeHTML(tableHTML)}</div></table><br data-astro-cid-2zp6q64z></div></div></section>` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin.astro", void 0);
const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin.astro";
const $$url = "/admin";

export { $$Admin as default, $$file as file, $$url as url };
