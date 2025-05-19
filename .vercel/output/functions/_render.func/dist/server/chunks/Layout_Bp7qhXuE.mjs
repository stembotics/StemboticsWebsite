import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderScript, b as addAttribute, d as renderTemplate, e as renderComponent, F as Fragment, f as renderSlot, g as renderHead } from './astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { v as verifyToken, d as db } from './auth_AXbtZ2QN.mjs';
import 'clsx';
/* empty css                        */

const $$Astro$1 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/courses" },
    { name: "Products", href: "/products" },
    { name: "Why Us", href: "/why-us" },
    { name: "For Teachers", href: "/teachers" },
    { name: "Contact", href: "/contact" }
  ];
  const token = Astro2.cookies.get("token");
  let userData = null;
  let cartItemCount = 0;
  if (token) {
    const user = verifyToken(token.value);
    if (user) {
      const result = await db.execute({
        sql: "SELECT first_name, last_name FROM users WHERE id = ?",
        args: [user.userId]
      });
      userData = result.rows[0];
      const cartResult = await db.execute({
        sql: `
        SELECT COUNT(*) as count
        FROM cart_items ci
        JOIN shopping_carts sc ON ci.cart_id = sc.id
        WHERE sc.user_id = ?
      `,
        args: [user.userId]
      });
      cartItemCount = Number(cartResult.rows[0]?.count) || 0;
    }
  }
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-40 w-full bg-white shadow-sm"> <div class="container-custom"> <div class="flex items-center justify-between h-16 md:h-20"> <!-- Logo --> <a href="/" class="flex items-center shrink-0 text-primary-600 font-display font-bold text-xl md:text-2xl"> <img src="/favicon.png" alt="Stembotics Academy Logo" class="h-8 w-auto mr-2">
Stembotics
</a> <!-- Desktop Navigation --> <nav class="hidden md:flex md:items-center md:gap-x-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-slate-700 hover:text-primary-600 py-2 text-sm font-medium transition-colors"> ${item.name} </a>`)} </nav> <!-- CTA Buttons --> <div class="hidden md:flex md:items-center gap-x-4"> <a href="/cart" class="relative text-gray-700 hover:text-primary-600"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path> </svg> ${cartItemCount > 0 && renderTemplate`<span class="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary-600 rounded-full"> ${cartItemCount} </span>`} </a> ${userData ? renderTemplate`<div class="flex items-center space-x-4"> <a href="/dashboard" class="text-primary-700 hover:text-primary-800 font-medium text-sm"> ${userData.first_name} ${userData.last_name} </a> <button onclick="handleSignOut()" class="text-gray-700 hover:text-primary-600 font-medium text-sm">
Sign out
</button> </div>` : renderTemplate`<div class="flex items-center space-x-4"> <a href="/login" class="text-primary-700 hover:text-primary-800 font-medium text-sm">
Log in
</a> <div class="relative group"> <a href="/signup" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-sm">
Sign Up
</a> <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"> <a href="/signup" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-t-md">Student Sign Up</a> <a href="/teachers/signup" class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-b-md">Teacher Sign Up</a> </div> </div> </div>`} </div> <!-- Mobile Menu Button --> <button type="button" class="inline-flex items-center md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md" aria-expanded="false" id="mobileMenuBtn"> <span class="sr-only">Open menu</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" id="menuIcon"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" id="closeIcon"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Mobile Menu --> <div class="md:hidden hidden" id="mobileMenu"> <div class="pt-2 pb-4 px-4 space-y-1 border-t border-slate-200"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="block py-2 px-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"> ${item.name} </a>`)} <div class="pt-4 flex flex-col space-y-3"> ${userData ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <a href="/dashboard" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-full hover:bg-primary-100 transition-colors"> ${userData.first_name} ${userData.last_name} </a> <button id="mobileSignOutBtn" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-sm">
Sign Out
</button> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <a href="/login" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-700 bg-primary-50 rounded-full hover:bg-primary-100 transition-colors">
Log in
</a> <a href="/signup" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-sm">
Student Sign Up
</a> <a href="/teachers/signup" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-secondary-600 to-primary-600 rounded-full hover:from-secondary-700 hover:to-primary-700 transition-all duration-200 shadow-sm">
Teacher Sign Up
</a> ` })}`} </div> </div> </div> </div> </header> ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/common/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/common/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Products", href: "/products" },
    { name: "For Teachers", href: "/teachers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
  const resourceLinks = [
    { name: "Resources", href: "/resources" },
    { name: "FAQ", href: "/faq" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-900 text-white"> <div class="container-custom"> <div class="pt-12 pb-8 grid grid-cols-1 md:grid-cols-12 gap-8"> <!-- Logo and Description --> <div class="md:col-span-5 space-y-4"> <div class="flex items-center text-white font-display font-bold text-xl"> <svg class="w-8 h-8 mr-2 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" fill="currentColor"></path> <path d="M12 13.25V19.25M12 19.25L19.25 15M12 19.25L4.75 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
Stembotics Academy
</div> <p class="text-slate-400 text-sm md:text-base max-w-sm">
Empowering the next generation of STEM innovators through cutting-edge educational programs and opportunities.
</p> <div class="flex space-x-4"> <a href="https://www.linkedin.com/company/stembotics" class="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"> <span class="sr-only">LinkedIn</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path> </svg> </a> <a href="https://www.instagram.com/stembotics_.academy/" class="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"> <span class="sr-only">Instagram</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path> </svg> </a> <a href="https://www.facebook.com/p/Stembotics-Academy-61559479300312/" class="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"> <span class="sr-only">Facebook</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg> </a> </div> <div class="mt-4 text-slate-400 text-sm"> <div>Mount Laurel, NJ, 08054</div> <div><a href="mailto:info@stembotics.org" class="hover:text-white">info@stembotics.org</a></div> <div><a href="tel:+18562093538" class="hover:text-white">+1 (856) 209-3538</a></div> </div> </div> <!-- Navigation Links --> <div class="md:col-span-3 md:ml-auto"> <h3 class="text-white font-display text-lg font-semibold mb-4">Navigation</h3> <ul class="space-y-3"> ${mainLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-slate-400 hover:text-white transition-colors text-sm"> ${link.name} </a> </li>`)} </ul> </div> <!-- Resources Links --> <div class="md:col-span-3"> <h3 class="text-white font-display text-lg font-semibold mb-4">Resources</h3> <ul class="space-y-3"> ${resourceLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-slate-400 hover:text-white transition-colors text-sm"> ${link.name} </a> </li>`)} </ul> </div> </div> <div class="border-t border-slate-800 py-8 text-center md:flex md:justify-between md:text-left"> <p class="text-slate-400 text-sm">
&copy; ${currentYear} Stembotics Academy. All rights reserved.
</p> <div class="mt-4 md:mt-0"> <a href="/terms" class="text-sm text-slate-400 hover:text-white mx-3 md:mx-4">Terms of Service</a> <a href="/privacy" class="text-sm text-slate-400 hover:text-white mx-3 md:mx-4">Privacy Policy</a> </div> </div> </div> </footer>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/common/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Stembotics Academy - Empowering the next generation of STEM innovators through cutting-edge robotics and technology education",
    image = "https://stembotics.org/images/og-image.jpg",
    type = "website"
  } = Astro2.props;
  const baseUrl = "https://stembotics.org";
  const canonicalURL = new URL(Astro2.url.pathname, baseUrl);
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"', "><!-- Primary Meta Tags --><title>", ' | Stembotics Academy</title><meta name="title"', '><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:site_name" content="Stembotics Academy"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lexend:wght@500;700&display=swap" rel="stylesheet"><!-- Structured Data --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Organization",\n        "name": "Stembotics Academy",\n        "url": "https://stembotics.org",\n        "logo": "https://stembotics.org/images/logo.png",\n        "description": "Empowering the next generation of STEM innovators through cutting-edge robotics and technology education",\n        "address": {\n          "@type": "PostalAddress",\n          "streetAddress": "123 Innovation Way",\n          "addressLocality": "Mount Laurel",\n          "addressRegion": "NJ",\n          "postalCode": "08054",\n          "addressCountry": "US"\n        },\n        "contactPoint": {\n          "@type": "ContactPoint",\n          "telephone": "+1-856-209-3538",\n          "contactType": "customer service",\n          "email": "info@stembotics.org",\n          "availableLanguage": ["English"]\n        },\n        "sameAs": [\n          "https://www.linkedin.com/company/stembotics",\n          "https://www.instagram.com/stembotics_.academy/",\n          "https://www.facebook.com/p/Stembotics-Academy-61559479300312/"\n        ]\n      }\n    <\/script>', '</head> <body class="min-h-screen flex flex-col bg-slate-50 text-slate-900"> ', ' <main class="flex-grow"> ', " </main> ", " <!-- Botpress Chat Widget --> <script>\n      // Wait for DOM to be fully loaded\n      window.addEventListener('load', function() {\n        // Small delay to ensure everything is ready\n        setTimeout(function() {\n          const injectScript = document.createElement('script');\n          injectScript.src = 'https://cdn.botpress.cloud/webchat/v2.4/inject.js';\n          document.body.appendChild(injectScript);\n\n          injectScript.onload = function() {\n            const configScript = document.createElement('script');\n            configScript.src = 'https://files.bpcontent.cloud/2025/05/12/17/20250512174237-IYMUDJUJ.js';\n            document.body.appendChild(configScript);\n          };\n        }, 1000);\n      });\n    <\/script> </body> </html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(`${title} | Stembotics Academy`, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(type, "content"), addAttribute(canonicalURL, "content"), addAttribute(`${title} | Stembotics Academy`, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(canonicalURL, "content"), addAttribute(`${title} | Stembotics Academy`, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
