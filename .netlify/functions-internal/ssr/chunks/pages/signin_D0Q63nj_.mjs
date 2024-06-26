/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { a as $$Base } from './404_1a20QiAo.mjs';
import { N as Notice } from './index_D5jHETag.mjs';
import Stripe from 'stripe';

const $$Astro = createAstro("https://stembotics.org");
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const stripe = new Stripe("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");
  const errors = { username: "", email: "", password: "" };
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    if ((email === "krithik.alluri@gmail.com" || email === "chakrapani.alluri@gmail.com" || email === "info@stembotics.org") && password === "admin") {
      console.log("Admin Detected");
      Astro2.cookies.set("id", "ADMIN");
      return Astro2.redirect("/admin");
    }
    const customers = await stripe.customers.search({
      query: `email:'${email}'`
    });
    console.log(customers);
    if (customers["data"].length > 0) {
      const customer = customers["data"][0];
      const customer_id = customer["id"];
      const customer_email = customer["email"];
      const customer_password = customer["metadata"]["password"];
      if (customer_email === email && customer_password === password) {
        Astro2.cookies.set("id", customer_id);
        return Astro2.redirect("/portal");
      } else {
        errors.password += "Password is incorrect. Email info@stembotics.org to change it.";
      }
    } else {
      errors.username += "Email is not registered.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container max-w-full"> <div class="row"> <div class="min-h-[980px] bg-white py-10  lg:py-[114px] bg-gradient"> <div class="mx-auto w-full max-w-[960px] "> <div class="flex flex-col items-center justify-center"> <img class="mb-8 mx-auto " src="/images/flower.png" alt=""> <h1 class="mb-4 text-black">Sign In</h1> </div> <br> <form method="post" enctype="application/x-www-form-urlencoded" data-netlify="true"> <div class="form-group"> <label for="email" class="form-label">Email Address</label> <input type="email" id="email" name="email" class="form-control" placeholder="Your Email Address" required> ${errors.username && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.username}` })}`} </div> <br> <div class="form-group mt-4"> <label for="password" class="form-label">Password</label> <input type="password" id="password" name="password" class="form-control" placeholder="Your Password" required> ${errors.password && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.password}` })}`} </div> <input class="btn btn-primary mt-10 block w-full" type="submit" value="Sign In"> <p class="mt-6 text-center text-dark">
Can't <a class="text-black">log in</a>?
<a class="text-black" href="/signup">Sign up</a> for create account
</p> </form> </div> </div> <!-- <SigninSlider
          client:load
          title=" Turn your All ideas into<br /> your reality"
        /> --> </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signin.astro", void 0);
const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };
