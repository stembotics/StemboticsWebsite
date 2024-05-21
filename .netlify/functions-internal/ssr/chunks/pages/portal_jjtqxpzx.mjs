/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { a as $$PageHeader, $ as $$Shape } from './_category__B4JegDBl.mjs';
import { createRequire } from 'module';
import { b as getEntryBySlug, a as $$Base } from './404_iGo1Emob.mjs';
import { N as Notice } from './index_CVWqoLfx.mjs';
import Stripe from 'stripe';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://stembotics.org");
const $$Portal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Portal;
  createRequire(import.meta.url);
  const stripe = new Stripe("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");
  let customer_name = 'customer["name"]';
  let customer_email = 'customer["email"]';
  let customer_phone = ' customer["phone"]';
  let bestTimes = ' customer["phone"]';
  let child_name = "customer['metadata']['childName']";
  let child_age = 9;
  let id;
  if (Astro2.cookies.has("id")) {
    id = Astro2.cookies.get("id");
    const customer = await stripe.customers.retrieve(id?.value);
    customer_name = customer["name"];
    customer_email = customer["email"];
    customer_phone = customer["phone"];
    child_name = customer["metadata"]["childName"];
    bestTimes = customer["metadata"]["bestTimes"];
    child_age = parseInt(customer["metadata"]["childAge"]);
  } else {
    return Astro2.redirect("/signup");
  }
  const portal = await getEntryBySlug("portal", "index");
  portal.data;
  let dataString = JSON.stringify(portal.data);
  let pBody = dataString.replaceAll("customer_name", customer_name);
  pBody = pBody.replaceAll("customer_email", customer_email);
  pBody = pBody.replaceAll("customer_phone", customer_phone);
  pBody = pBody.replaceAll("child_name", child_name);
  pBody = pBody.replaceAll("child_age", child_age.toString());
  const page_data = {
    ...JSON.parse(pBody),
    content: portal.body
  };
  const paymentIntents = await stripe.paymentIntents.list({
    customer: id?.value,
    limit: 10
  });
  console.log(paymentIntents);
  let products = "";
  const intentData = paymentIntents["data"];
  for (let i = 0; i < intentData.length; i++) {
    if (intentData[i]["amount"] == 2400) {
      products = products + " fllLearn ";
    } else if (intentData[i]["amount"] == 2500) {
      products = products + " vexLearn ";
    } else if (intentData[i]["amount"] == 16e3) {
      products = products + " vexComp ";
    } else if (intentData[i]["amount"] == 15e3) {
      products = products + " fllComp ";
    }
  }
  const customerSession = await stripe.customerSessions.create({
    customer: `${id?.value}`,
    components: {
      buy_button: {
        enabled: true
      }
    }
  });
  let CLIENT_SECRET = customerSession["client_secret"];
  let date = "";
  if (bestTimes == "thursday5pm7pm") {
    date = "Thursday from 5 pm - 7 pm";
  } else if (bestTimes == "thursday7pm9pm") {
    date = "Thursday from 7 pm - 9 pm";
  } else if (bestTimes == "saturday5pm7pm") {
    date = "Saturday from 5 pm - 7 pm";
  } else if (bestTimes == "saturday7pm9pm") {
    date = "Saturday from 5 pm - 9 pm";
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": portal.data.title, "meta_title": portal.data.meta_title, "description": portal.data.description, "image": portal.data.image }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<section class="page-hero py-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[768px] text-center"> ', " <p>Your next class starts on the next ", " after June 1st, 2024.</p> <br> </div> <!-- benifit --> ", " ", " ", " ", " ", ' <div class="page-hero-content mx-auto max-w-[768px] text-center"> <h2>Available programs for ', "</h2> <p>Choose the program that best suits your needs</p> <br> ", ' <br> <div class="buy-buttons"> <script async src="https://js.stripe.com/v3/buy-button.js"></script> ', ' <script async src="https://js.stripe.com/v3/buy-button.js">\n</script> ', ' <script async src="https://js.stripe.com/v3/buy-button.js">\n          </script> ', ' <script async src="https://js.stripe.com/v3/buy-button.js">\n            </script> ', " </div> </div> <br> ", " </div> </section> "])), renderComponent($$result2, "Shape", $$Shape, {}), maybeRenderHead(), renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data }), date, products.includes("vexLearn") && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "note" }, { "default": ($$result3) => renderTemplate`Congratulations! ${child_name} is registered in the VEX Learning plan, you now have access to the VEX Competition Plan.` })}`, products.includes("fllLearn") && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "note" }, { "default": ($$result3) => renderTemplate`Congratulations! ${child_name} is registered in the FLL Learning plan, you now have access to the FLL Competition Plan.` })}`, products.includes("vexComp") && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "note" }, { "default": ($$result3) => renderTemplate`Congratulations! ${child_name} is registered in the VEX Competition plan.` })}`, products.includes("fllComp") && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "note" }, { "default": ($$result3) => renderTemplate`Congratulations! ${child_name} is registered in the FLL Competition plan.` })}`, !products.includes("vexLearn") && !products.includes("fllLearn") && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "note" }, { "default": ($$result3) => renderTemplate`Unfortunately ${child_name} isn't registered in anything, to get access to the Competition Packages, register for a Learning plan.` })}`, child_name, !(child_age >= 9 && child_age <= 14) && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${child_name} is not eligible for any of our programs right now. Sorry!` })}`, !products.includes("vexLearn") && renderTemplate`${renderComponent($$result2, "stripe-buy-button", "stripe-buy-button", { "buy-button-id": "buy_btn_1P9QxyBacad2NXeVvtaS6GJw", "publishable-key": "pk_live_51P6aVDBacad2NXeVAfq9rBWO21sJ8rVicoGsTRMfa5OvmUeZmhYucMgCXYkZhiUH6ga8oRIK03PcnmzCxyMpcRk000p9aWnmDw", "customer-session-client-secret": `${CLIENT_SECRET}` })}`, products.includes("vexLearn") && renderTemplate`${renderComponent($$result2, "stripe-buy-button", "stripe-buy-button", { "buy-button-id": "buy_btn_1PIHohBacad2NXeVEWslv6sw", "publishable-key": "pk_live_51P6aVDBacad2NXeVAfq9rBWO21sJ8rVicoGsTRMfa5OvmUeZmhYucMgCXYkZhiUH6ga8oRIK03PcnmzCxyMpcRk000p9aWnmDw", "customer-session-client-secret": `${CLIENT_SECRET}` })}`, !products.includes("fllLearn") && renderTemplate`${renderComponent($$result2, "stripe-buy-button", "stripe-buy-button", { "buy-button-id": "buy_btn_1PIHkzBacad2NXeV7Z9qufOc", "publishable-key": "pk_live_51P6aVDBacad2NXeVAfq9rBWO21sJ8rVicoGsTRMfa5OvmUeZmhYucMgCXYkZhiUH6ga8oRIK03PcnmzCxyMpcRk000p9aWnmDw", "customer-session-client-secret": `${CLIENT_SECRET}` })}`, products.includes("fllLearn") && renderTemplate`${renderComponent($$result2, "stripe-buy-button", "stripe-buy-button", { "buy-button-id": "buy_btn_1PIHoCBacad2NXeV7kbhwxVT", "publishable-key": "pk_live_51P6aVDBacad2NXeVAfq9rBWO21sJ8rVicoGsTRMfa5OvmUeZmhYucMgCXYkZhiUH6ga8oRIK03PcnmzCxyMpcRk000p9aWnmDw", "customer-session-client-secret": `${CLIENT_SECRET}` })}`, renderComponent($$result2, "Notice", Notice, { "type": "tip" }, { "default": ($$result3) => renderTemplate`Remember that whatever you pre-register for, you will be charged for a monthly subscription starting your first class.` })) })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/portal.astro", void 0);
const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/portal.astro";
const $$url = "/portal";

export { $$Portal as default, $$file as file, $$url as url };
