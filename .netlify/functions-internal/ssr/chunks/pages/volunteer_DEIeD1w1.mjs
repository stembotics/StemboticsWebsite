/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BN1N3Yq0.mjs';
import 'kleur/colors';
import { a as $$Base } from './404_ZRzUwij7.mjs';
import { N as Notice } from './index_CEn8hKun.mjs';
import sheetdb from 'sheetdb-node';

const $$Astro = createAstro("https://stembotics.org");
const $$Volunteer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Volunteer;
  const errors = { username: "", email: "", good: "" };
  var config = {
    address: "210dinh2sfzez",
    auth_login: "t4gsnkhy",
    auth_password: "9kum7wyoyvosjnz5vb0a"
  };
  var client = sheetdb(config);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const name = formData.get("name");
    const age = parseInt(formData.get("age")?.toString() ?? "0");
    const tel = formData.get("tel");
    const email = formData.get("email");
    if (typeof name !== "string" || name.length < 1) {
      errors.username += "Please enter a Name.";
    } else if (age < 15) {
      errors.username += "Sorry you're too young!";
    } else if (typeof email !== "string" || email.length < 5) {
      errors.email += "Please enter a valid email.";
    } else {
      client.create({ Name: name, Phone_Number: tel, Email: email, Age: age }).then(function(data) {
        console.log(data);
      }, function(err) {
        console.log(err);
      });
      errors.good += "You're all signed up";
    }
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container max-w-full"> <div class="row"> <div class="min-h-[980px] bg-white py-10  lg:py-[114px] bg-gradient"> <div class="mx-auto w-full max-w-[960px] "> <div class="flex flex-col items-center justify-center"> <img class="mb-8 mx-auto " src="/images/flower.png" alt=""> <h1 class="mb-4 text-black">Sign Up to Volunteer</h1> <h4>Earn a Presidential Volunteer Service Award by contributing 100+ hours</h4> <br> <h4 class="text-black">Sorry our signup is not working right now, Please use the signup genius below.</h4> <a href="https://www.signupgenius.com/go/10C0B45A5AF23A2FDC43-49979465-stembotics" target="_blank"><img src="https://www.signupgenius.com/images/sign-up-now4.gif" width="250" height="45" border="0" alt="Sign Up!"></a> </div> <!-- <div class="signin-options mt-10">
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
            </div> --> <form method="POST" enctype="application/x-www-form-urlencoded" data-netlify="true"> <br> <div class="form-group"> <label for="name" class="form-label text-black">Full Name</label> <input type="text" id="name" name="name" class="form-control" placeholder="Your Full Name" required> ${errors.username && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.username}` })}`} </div> <br> <div class="form-group"> <label for="age" class="form-label text-black">Age</label> <input type="number" id="age" name="age" class="form-control" placeholder="Your Age" required> </div> <br> <div class="form-group mt-4"> <label for="email" class="form-label text-black">Email Address</label> <input type="email" id="email" name="email" class="form-control" placeholder="Your Email Address" required> ${errors.email && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.email} Please <a href="/signin">Sign In</a>` })}`} </div> <div class="form-group mt-4"> <label for="tel" class="form-label text-black">Phone No.</label> <input type="tel" id="tel" name="tel" class="form-control" placeholder="Your Phone Number" required> ${errors.good && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "tip" }, { "default": ($$result3) => renderTemplate`${errors.good}` })}`} </div> <input class="btn btn-primary mt-10 block w-full" type="submit" value="Sign Up"> </form> </div> </div> <!-- <SigninSlider
        client:load
        title="Get ready to learn!"
        /> --> </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/volunteer.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/volunteer.astro";
const $$url = "/volunteer";

export { $$Volunteer as default, $$file as file, $$url as url };
