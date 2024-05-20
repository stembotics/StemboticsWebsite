/* empty css                              */
import { d as createAstro, e as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_CnyVfoUF.mjs';
import 'kleur/colors';
import { a as $$Base } from './404_kYFGQAqB.mjs';
import { createRequire } from 'module';
import { jsxs, jsx } from 'react/jsx-runtime';
import { marked } from 'marked';
import { useState, useRef } from 'react';
import SwiperCore from 'swiper';
/* empty css                           */
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { N as Notice } from './index_ByibYVuf.mjs';

const SigninSlider = ({ title }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: "auth-banner bg-gradient flex flex-col items-center justify-center py-16 lg:col-6 lg:block", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "absolute left-0 top-0 h-full w-full",
        src: "/images/login-banner-bg.png",
        alt: ""
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "w-full text-center", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "h3 text-white",
          dangerouslySetInnerHTML: { __html: marked.parse(title) }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "auth-banner-carousel", children: [
        /* @__PURE__ */ jsxs(
          Swiper,
          {
            pagination: {
              type: "bullets",
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: true
            },
            onSwiper: (swiper2) => {
              setSwiper(swiper2);
            },
            modules: [Pagination, Autoplay],
            slidesPerView: 1,
            children: [
              /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
                "img",
                {
                  width: "667",
                  height: "557",
                  className: "mx-auto",
                  src: "/images/signup-carousel-img-1.png",
                  alt: ""
                }
              ) }, "feature-0"),
              /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
                "img",
                {
                  width: "667",
                  height: "557",
                  className: "mx-auto",
                  src: "/images/signup-carousel-img-1.png",
                  alt: ""
                }
              ) }, "feature-1"),
              /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
                "img",
                {
                  width: "667",
                  height: "557",
                  className: "mx-auto",
                  src: "/images/signup-carousel-img-1.png",
                  alt: ""
                }
              ) }, "feature-2")
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsx(
          "div",
          {
            width: "100%",
            className: " pagination",
            style: { width: "100%" },
            ref: paginationRef
          }
        ) })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro("https://stembotics.org");
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const require = createRequire(import.meta.url);
  const stripe = require("stripe")(process.env.STRIPE_KEY);
  const errors = { username: "", email: "", password: "" };
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
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
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container max-w-full"> <div class="row"> <div class="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]"> <div class="mx-auto w-full max-w-[480px]"> <img class="mb-8" src="/images/flower.png" alt=""> <h1 class="mb-4">Sign In</h1> <br> <form method="post" enctype="application/x-www-form-urlencoded"> <div class="form-group"> <label for="email" class="form-label">Email Address</label> <input type="email" id="email" name="email" class="form-control" placeholder="Your Email Address" required> ${errors.username && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.username}` })}`} </div> <br> <div class="form-group mt-4"> <label for="password" class="form-label">Password</label> <input type="password" id="password" name="password" class="form-control" placeholder="Your Password" required> ${errors.password && renderTemplate`${renderComponent($$result2, "Notice", Notice, { "type": "warning" }, { "default": ($$result3) => renderTemplate`${errors.password}` })}`} </div> <input class="btn btn-primary mt-10 block w-full" type="submit" value="Sign In"> <p class="mt-6 text-center">
Can't <a class="text-dark">log in</a>?
<a class="text-dark" href="/signup">Sign up</a> for create account
</p> </form> </div> </div> ${renderComponent($$result2, "SigninSlider", SigninSlider, { "client:load": true, "title": " Turn your All ideas into<br /> your reality", "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/SigninSlider.jsx", "client:component-export": "default" })} </div> </div> </section> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signin.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/signin.astro";
const $$url = "/signin";

const signin = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { SigninSlider as S, signin as s };
