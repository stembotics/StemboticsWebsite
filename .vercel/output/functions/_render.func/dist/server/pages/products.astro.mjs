/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DvdpRdin.mjs';
import 'clsx';
import { d as db } from '../chunks/auth_H6y_H1li.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/products/${product.id}`, "href")} class="group"> <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"> <img${addAttribute(product.images[0], "src")}${addAttribute(product.name, "alt")} class="h-full w-full object-cover object-center group-hover:opacity-75"> </div> <h3 class="mt-4 text-sm text-gray-700">${product.name}</h3> <p class="mt-1 text-lg font-medium text-gray-900">$${product.price.toFixed(2)}</p> <p class="mt-1 text-sm text-gray-500">${product.category}</p> </a>`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/components/ProductCard.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const result = await db.execute({
    sql: `
    SELECT p.*, pi.url as image_url 
    FROM products p 
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.display_order = 0 
    ORDER BY p.created_at DESC
  `,
    args: []
  });
  const products = result.rows.map((product) => ({
    id: Number(product.id),
    name: String(product.name),
    description: String(product.description),
    price: Number(product.price),
    images: [String(product.image_url || "/images/placeholder.jpg")],
    // Use placeholder if no image
    category: String(product.category)
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Products" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> <div class="text-center max-w-3xl mx-auto mb-12"> <h2 class="text-2xl font-bold tracking-tight text-gray-900">STEM Learning Kits</h2> <p class="mt-4 text-lg text-gray-500">
Discover our collection of hands-on STEM learning kits designed to inspire young minds. 
          Each kit comes with everything needed to explore science, technology, engineering, and mathematics 
          through engaging, interactive projects.
</p> </div> <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "product": product })}`)} </div> </div> </div> ` })}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/products/index.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
