let o=[];const a=document.getElementById("cart-items"),n=document.getElementById("empty-cart"),i=document.getElementById("cart-summary"),l=document.getElementById("cart-subtotal"),s=document.getElementById("checkout-button");if(!a||!n||!i||!l||!s)throw new Error("Required DOM elements not found");async function c(){try{const t=await fetch("/api/cart");if(!t.ok){if(t.status===401){window.location.href="/login";return}throw new Error("Failed to load cart")}o=(await t.json()).items,u()}catch(t){console.error("Error loading cart:",t),a.innerHTML=`
        <div class="text-center py-12">
          <p class="text-red-500">Failed to load cart. Please try again.</p>
        </div>
      `}}function u(){if(o.length===0){a.classList.add("hidden"),n.classList.remove("hidden"),i.classList.add("hidden");return}a.classList.remove("hidden"),n.classList.add("hidden"),i.classList.remove("hidden");const t=o.reduce((e,r)=>e+r.price*r.quantity,0);l.textContent=`$${t.toFixed(2)}`,s.disabled=!1,a.innerHTML=`
      <div class="flow-root">
        <ul role="list" class="-my-6 divide-y divide-gray-200">
          ${o.map(e=>`
            <li class="flex py-6">
              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src="${e.image_url||"/images/placeholder.jpg"}"
                  alt="${e.name||"Product"}"
                  class="h-full w-full object-cover object-center"
                  onerror="this.src='/images/placeholder.jpg'"
                />
              </div>

              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>${e.name||"Unknown Product"}</h3>
                    <p class="ml-4">$${(e.price*e.quantity).toFixed(2)}</p>
                  </div>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <div class="flex items-center">
                    <label for="quantity-${e.id}" class="mr-2 text-gray-500">Qty</label>
                    <select
                      id="quantity-${e.id}"
                      class="rounded-md border-gray-300 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                    >
                      ${[1,2,3,4,5,6,7,8,9,10].map(r=>`
                        <option value="${r}" ${e.quantity===r?"selected":""}>${r}</option>
                      `).join("")}
                    </select>
                  </div>

                  <button
                    type="button"
                    class="font-medium text-primary-600 hover:text-primary-500"
                    onclick="removeItem('${e.id}')"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          `).join("")}
        </ul>
      </div>
    `,o.forEach(e=>{const r=document.getElementById(`quantity-${e.id}`),d=r.closest("li")?.querySelector("button");r&&r.addEventListener("change",()=>y(e.id,r.value)),d&&d.addEventListener("click",()=>m(e.id))})}async function y(t,e){try{if(!(await fetch("/api/cart",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({itemId:t,quantity:parseInt(e)})})).ok)throw new Error("Failed to update quantity");await c()}catch(r){console.error("Error updating quantity:",r),alert("Failed to update quantity. Please try again.")}}async function m(t){try{if(!(await fetch("/api/cart",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({itemId:t})})).ok)throw new Error("Failed to remove item");await c()}catch(e){console.error("Error removing item:",e),alert("Failed to remove item. Please try again.")}}async function f(){try{const t=await fetch("/api/checkout",{method:"POST"});if(!t.ok){if(t.status===401){window.location.href="/login";return}throw new Error("Failed to create checkout session")}const e=await t.json();if(e.url)window.location.href=e.url;else throw new Error("No checkout URL received")}catch(t){console.error("Error during checkout:",t),alert("Failed to start checkout. Please try again.")}}s.addEventListener("click",f);c();
