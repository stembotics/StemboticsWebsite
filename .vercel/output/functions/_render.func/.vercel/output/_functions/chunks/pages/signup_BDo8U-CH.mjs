/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CnyVfoUF.mjs';
import 'kleur/colors';
import { a as $$Base } from './404_CNDTmIcj.mjs';
import { createRequire } from 'module';
import { S as SigninSlider } from './signin_CrUNvwJX.mjs';
import { N as Notice } from './index_C-tvEqUc.mjs';

const $$Astro = createAstro("https://stembotics.org");
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const require = createRequire(import.meta.url);
  const stripe = require("stripe")(process.env.STRIPE_KEY);
  const errors = { username: "", email: "", password: "" };
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const name = formData.get("name");
    const childName = formData.get("childName");
    const childAge = formData.get("childAge");
    const tel = formData.get("tel");
    const email = formData.get("email");
    const password = formData.get("password");
    const bestTimes = formData.get("bestTimes");
    if (typeof name !== "string" || name.length < 1) {
      errors.username += "Please enter a Name.";
    }
    if (typeof password !== "string" || password.length < 6) {
      errors.password += "Password must be at least 6 characters. ";
    }
    const customers = await stripe.customers.search({
      query: `email:'${email}'`
    });
    if (customers["data"].length == 0) {
      const customer = await stripe.customers.create({
        name,
        email,
        phone: tel,
        metadata: {
          childName,
          childAge,
          password,
          bestTimes
        }
      });
      console.log(customer["id"]);
      Astro2.cookies.set("id", customer["id"]);
      return Astro2.redirect("/signin");
    } else {
      errors.email += "Email is already registered.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container max-w-full"> <div class="row"> <div class="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]"> <div class="mx-auto w-full max-w-[480px]"> <img class="mb-8" src="/images/flower.png" alt=""> <h1 class="mb-4">Sign Up</h1> <p>Get ready to be immersed in learning</p> <!-- <div class="signin-options mt-10">
              <a class="btn btn-outline-white block w-full text-dark" href="#"
                >Sign Up With Google</a
              >
            </div>
            <div
              class="relative my-8 text-center after:absolute after:left-0 after:top-1/2 after:z-[0] after:w-full after:border-b after:border-border after:content-['']"
            >
              <span class="relative z-[1] inline-block bg-white px-2"
                >Or Sign Up With Email</span
              >
            </div> --> <form method="POST" enctype="application/x-www-form-urlencoded"> <br> <div class="form-group"> <label for="name" class="form-label">Full Name</label> <input type="text" id="name" name="name" class="form-control" placeholder="Your Full Name" required> ${errors.username && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.username}` })}`} </div> <br> <div class="form-group"> <label for="childName" class="form-label">Child's Full Name</label> <input type="text" id="childName" name="childName" class="form-control" placeholder="Your Child's Full Name" required> </div> <br> <div class="form-group"> <label for="childAge" class="form-label">Child Age</label> <input type="number" id="childAge" name="childAge" class="form-control" placeholder="Your Child's Age" required> </div><br> <div class="form-group mb-5"> <label class="form-label" for="bestTimes">Best Times for Classes</label> <select name="bestTimes" id="bestTimes" class="form-select" required> <option value="thursday5pm7pm">Thursday 5 pm - 7 pm</option> <option value="thursday7pm9pm">Thursday 7 pm - 9 pm</option> <option value="saturday5pm7pm">Saturday 5 pm - 7 pm</option> <option value="saturday7pm9pm">Saturday 7 pm - 9 pm</option> </select> </div> <br> <div class="form-group mt-4"> <label for="email" class="form-label">Email Address</label> <input type="email" id="email" name="email" class="form-control" placeholder="Your Email Address" required> ${errors.email && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.email} Please <a href="/signin">Sign In</a>` })}`} </div> <div class="form-group mt-4"> <label for="tel" class="form-label">Phone No.</label> <input type="tel" id="tel" name="tel" class="form-control" placeholder="Your Phone Number" required> </div> <br> <div class="form-group mt-4"> <label for="password" class="form-label">Password</label> <input type="password" minlength="6" id="password" name="password" class="form-control" placeholder="Your Password" required> ${errors.password && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.password}` })}`} </div> <input class="btn btn-primary mt-10 block w-full" type="submit" value="Sign Up"> </form> <p class="mt-6 text-center">
Have an <a class="text-dark">account</a>?
<a class="text-dark" href="/signin">Sign in</a> here
</p> </div> </div> ${renderComponent($$result2, "SigninSlider", SigninSlider, { "client:load": true, "title": "Get ready to learn!", "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/SigninSlider.jsx", "client:component-export": "default" })} </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signup.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
