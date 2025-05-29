/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BXRAwln_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_3hfigpS4.mjs';
import { d as db } from '../../chunks/auth_DTf2el9S.mjs';
/* empty css                                   */
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const result = await db.execute({
    sql: `
    SELECT p.*, pi.url as image_url 
    FROM products p 
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.display_order = 0
    WHERE p.id = ?
  `,
    args: [id]
  });
  const product = result.rows[0] ? {
    id: Number(result.rows[0].id),
    name: String(result.rows[0].name),
    description: String(result.rows[0].description),
    price: Number(result.rows[0].price),
    image: String(result.rows[0].image_url || "/images/placeholder.jpg"),
    category: String(result.rows[0].category),
    stock: Number(result.rows[0].stock)
  } : null;
  if (!product) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": product.name, "data-astro-cid-y5jmkon6": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="toast" class="fixed top-20 left-1/2 transform -translate-x-1/2 translate-y-[-100%] transition-all duration-300 ease-in-out z-50 opacity-0" data-astro-cid-y5jmkon6> <div class="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center min-w-[200px]" data-astro-cid-y5jmkon6> <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-y5jmkon6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-y5jmkon6></path> </svg> <span id="toast-message" data-astro-cid-y5jmkon6>Item added to cart!</span> </div> </div> <div class="bg-white" data-astro-cid-y5jmkon6> <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8" data-astro-cid-y5jmkon6> <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8" data-astro-cid-y5jmkon6>  <div class="flex flex-col-reverse" data-astro-cid-y5jmkon6> <div class="aspect-h-1 aspect-w-1 w-full" data-astro-cid-y5jmkon6> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="h-full w-full object-cover object-center sm:rounded-lg" data-astro-cid-y5jmkon6> </div> </div>  <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0" data-astro-cid-y5jmkon6> <h1 class="text-3xl font-bold tracking-tight text-gray-900" data-astro-cid-y5jmkon6>${product.name}</h1> <div class="mt-3" data-astro-cid-y5jmkon6> <h2 class="sr-only" data-astro-cid-y5jmkon6>Product information</h2> <p class="text-3xl tracking-tight text-gray-900" data-astro-cid-y5jmkon6>$${product.price.toFixed(2)}</p> </div> <div class="mt-6" data-astro-cid-y5jmkon6> <h3 class="sr-only" data-astro-cid-y5jmkon6>Description</h3> <div class="space-y-6 text-base text-gray-700" data-astro-cid-y5jmkon6> <p data-astro-cid-y5jmkon6>${product.description}</p> </div> </div> <div class="mt-6" data-astro-cid-y5jmkon6> <div class="flex items-center" data-astro-cid-y5jmkon6> ${product.stock > 0 ? renderTemplate`<button type="button" id="add-to-cart-btn" class="btn-primary w-full"${addAttribute(product.id, "data-product-id")} data-astro-cid-y5jmkon6>
Add to Cart
</button>` : renderTemplate`<button type="button" class="btn-primary w-full opacity-50 cursor-not-allowed" disabled data-astro-cid-y5jmkon6>
Out of Stock
</button>`} </div> <p class="mt-2 text-sm text-gray-500" data-astro-cid-y5jmkon6> ${product.stock > 0 ? `${product.stock} items in stock` : "Currently out of stock"} </p> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/products/[id].astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/products/[id].astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/products/[id].astro";
const $$url = "/products/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
