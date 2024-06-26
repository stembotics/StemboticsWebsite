/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CTCjbM0q.mjs';
import 'kleur/colors';
import { a as $$Base } from './404_1a20QiAo.mjs';
import { createRequire } from 'module';
import { N as Notice } from './index_D5jHETag.mjs';
import Stripe from 'stripe';

const $$Astro = createAstro("https://stembotics.org");
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  createRequire(import.meta.url);
  const stripe = new Stripe("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");
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
      return Astro2.redirect("/portal");
    } else {
      errors.email += "Email is already registered.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container max-w-full"> <div class="row"> <div class="min-h-[980px] bg-white py-10  lg:py-[114px] bg-gradient"> <div class="mx-auto w-full max-w-[960px] "> <div class="flex flex-col items-center justify-center"> <img class="mb-8 mx-auto " src="/images/flower.png" alt=""> <h1 class="mb-4 text-black">Sign Up</h1> <h4>Get ready to be immersed in learning</h4> </div> <!-- <div class="signin-options mt-10">
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
            </div> --> <form method="POST" enctype="application/x-www-form-urlencoded" data-netlify="true"> <br> <div class="form-group"> <label for="name" class="form-label text-black">Full Name</label> <input type="text" id="name" name="name" class="form-control" placeholder="Your Full Name" required> ${errors.username && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.username}` })}`} </div> <br> <div class="form-group"> <label for="childName" class="form-label text-black">Child's Full Name</label> <input type="text" id="childName" name="childName" class="form-control" placeholder="Your Child's Full Name" required> </div> <br> <div class="form-group"> <label for="childAge" class="form-label text-black">Child Age</label> <input type="number" id="childAge" name="childAge" class="form-control" placeholder="Your Child's Age" required> </div><br> <div class="form-group mb-5"> <label class="form-label text-black" for="bestTimes">Best Times for Classes</label> <select name="bestTimes" id="bestTimes" class="form-select" required> <option value="saturday5pm7pm">Saturday 5 pm - 7 pm</option> <option value="saturday7pm9pm">Saturday 7 pm - 9 pm</option> </select> </div> <br> <div class="form-group mt-4"> <label for="email" class="form-label text-black">Email Address</label> <input type="email" id="email" name="email" class="form-control" placeholder="Your Email Address" required> ${errors.email && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.email} Please <a href="/signin">Sign In</a>` })}`} </div> <div class="form-group mt-4"> <label for="tel" class="form-label text-black">Phone No.</label> <input type="tel" id="tel" name="tel" class="form-control" placeholder="Your Phone Number" required> </div> <br> <div class="form-group mt-4"> <label for="password" class="form-label text-black">Password</label> <input type="password" minlength="6" id="password" name="password" class="form-control" placeholder="Your Password" required> ${errors.password && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.password}` })}`} </div> <input class="btn btn-primary mt-10 block w-full" type="submit" value="Sign Up"> </form> <p class="mt-6 text-center text-dark">
Have an <a class="text-black">account</a>?
<a class="text-black" href="/signin">Sign in</a> here
</p> </div> </div> <!-- <SigninSlider
        client:load
        title="Get ready to learn!"
        /> --> </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signup.astro", void 0);
const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
