/* empty css                                    */
import { c as createComponent, a as createAstro, e as renderComponent, r as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_nyxJ0JCJ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BzCtafMy.mjs';
import { v as verifyToken, d as db } from '../../chunks/auth_C2fVUnyh.mjs';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Products;
  const token = Astro2.cookies.get("token");
  let isAdmin = false;
  if (token) {
    const user = verifyToken(token.value);
    if (user && user.role === "admin") {
      isAdmin = true;
      const result = await db.execute({
        sql: "SELECT first_name, last_name FROM users WHERE id = ?",
        args: [user.userId]
      });
      result.rows[0];
    }
  }
  if (!isAdmin) {
    return Astro2.redirect("/login");
  }
  const products = await db.execute({
    sql: "SELECT * FROM products ORDER BY created_at DESC",
    args: []
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Manage Products" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white"> <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"> <div class="sm:flex sm:items-center"> <div class="sm:flex-auto"> <h1 class="text-3xl font-bold tracking-tight text-gray-900">Manage Products</h1> <p class="mt-2 text-sm text-gray-700">
Add, edit, or remove products from the store
</p> </div> <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none"> <button type="button" onclick="openAddProductModal()" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
Add Product
</button> </div> </div> <!-- Products Table --> <div class="mt-8 flow-root"> <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"> <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"> <table class="min-w-full divide-y divide-gray-300"> <thead> <tr> <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Stock</th> <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Created</th> <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0"> <span class="sr-only">Actions</span> </th> </tr> </thead> <tbody class="divide-y divide-gray-200"> ${products.rows.map((product) => renderTemplate`<tr> <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"> ${product.name} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
$${Number(product.price).toFixed(2)} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${product.category} </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> <span${addAttribute(`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${Number(product.stock) > 10 ? "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20" : Number(product.stock) > 0 ? "bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20" : "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20"}`, "class")}> ${product.stock ?? 0} in stock
</span> </td> <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> ${new Date(product.created_at).toLocaleDateString()} </td> <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"> <button${addAttribute(`editProduct(${product.id})`, "onclick")} class="text-indigo-600 hover:text-indigo-900 mr-4">
Edit
</button> <button${addAttribute(`deleteProduct(${product.id})`, "onclick")} class="text-red-600 hover:text-red-900">
Delete
</button> </td> </tr>`)} </tbody> </table> </div> </div> </div> </div> </div>  <div id="productModal" class="relative z-10 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true"> <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> <div class="fixed inset-0 z-10 overflow-y-auto"> <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"> <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"> <form id="productForm" onsubmit="handleProductSubmit(event)"> <input type="hidden" id="productId" name="id"> <div> <div class="mt-3 text-center sm:mt-5"> <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
Add Product
</h3> <div class="mt-2"> <div class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Name</label> <input type="text" name="name" id="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> </div> <div> <label for="description" class="block text-sm font-medium text-gray-700">Description</label> <textarea name="description" id="description" rows="3" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea> </div> <div> <label for="price" class="block text-sm font-medium text-gray-700">Price</label> <input type="number" name="price" id="price" step="0.01" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> </div> <div> <label for="stock" class="block text-sm font-medium text-gray-700">Stock</label> <input type="number" name="stock" id="stock" min="0" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> </div> <div> <label for="category" class="block text-sm font-medium text-gray-700">Category</label> <input type="text" name="category" id="category" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> </div> <div> <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label> <input type="url" name="image" id="image" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"> </div> </div> </div> </div> </div> <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"> <button type="submit" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">
Save
</button> <button type="button" onclick="closeProductModal()" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0">
Cancel
</button> </div> </form> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/products.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/products.astro", void 0);

const $$file = "/Users/krithikalluri/Documents/GitHub/StemboticsWebsite/src/pages/admin/products.astro";
const $$url = "/admin/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Products,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
