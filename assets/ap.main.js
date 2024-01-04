customElements.define("variant-select",class extends HTMLElement{async connectedCallback(){let e={},r=async()=>Array.from(this.querySelectorAll("input[type='radio']")).forEach(async t=>{let a=new URLSearchParams(window.location.search);a.set("variant",t.value),a.set("sections","main-product"),e[t.value]=await fetch(`${window.location.pathname}?${a}`).then(s=>s.json())});window.matchMedia("(hover: hover) and (pointer: fine)").matches?this.addEventListener("mouseover",r,{once:!0}):new Promise(t=>requestIdleCallback(t)).then(r),this.querySelectorAll("input[type='radio'][name='variant']").forEach(t=>{t.addEventListener("change",async()=>{t.form.querySelector('[name="id"]').value=t.value;let a=new URLSearchParams(window.location.search);a.set("variant",t.value),window.history.replaceState(null,null,`${window.location.pathname}?${a}`),a.set("sections","main-product");let s=e[t.value]?e[t.value]:await fetch(`${window.location.pathname}?${a}`).then(o=>o.json());e[t.value]=s,window.publish("variantUpdate",s)})})}});customElements.define("product-images",class extends HTMLElement{async connectedCallback(){this.unsubscribe=subscribe("variantUpdate",e=>{let r=new DOMParser().parseFromString(e["main-product"],"text/html").querySelector("product-images");this.replaceWith(r)}),await visible(this),new(await import("./ap.splide.esm.js")).default(this.querySelector(".splide"),{arrows:!1,pagination:!1}).mount()}disconnectedCallback(){this.unsubscribe()}});customElements.define("product-details",class extends HTMLElement{async connectedCallback(){this.unsubscribe=subscribe("variantUpdate",e=>{let r=new DOMParser().parseFromString(e["main-product"],"text/html").querySelector("product-details");this.querySelectorAll("[data-target^='product-details.']").forEach(t=>t.replaceWith(r.querySelector(`[data-target="${t.getAttribute("data-target")}"]`)))})}disconnectedCallback(){this.unsubscribe()}});customElements.define("product-form",class extends HTMLElement{async connectedCallback(){this.querySelector("form").addEventListener("submit",async e=>{e.preventDefault();let r=e.target;r.toggleAttribute("data-loading",!0);let t=new FormData(r);t.append("sections",["cart-drawer"]),t.append("sections_url",window.location.pathname),await fetch(routes.cart_add_url,{method:"POST",body:t,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}}).then(a=>a.json()).then(a=>publish("cartUpdate",a)),await fetch(routes.cart_url,{method:"GET",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}}).then(a=>a.json()).then(a=>publish("cartUpdate",a)),r.toggleAttribute("data-loading",!1)})}});customElements.define("cart-drawer",class extends HTMLElement{async connectedCallback(){this.unsubscribe=subscribe("cartUpdate",({sections:e})=>{e&&this.toggleAttribute("data-active",!0)})}disconnectedCallback(){this.unsubscribe()}});customElements.define("cart-form",class extends HTMLElement{connectedCallback(){this.unsubscribe=subscribe("cartUpdate",({sections:{["cart-drawer"]:e}={}})=>{if(this.querySelector("form").toggleAttribute("data-loading",!1),e){let r=new DOMParser().parseFromString(e,"text/html").querySelector("cart-form");Array.from(this.querySelectorAll('[data-target="cart-form.item"][data-key]')).forEach(t=>{r.querySelector(`[data-key="${t.dataset.key}"]`)||t.remove()}),Array.from(r.querySelectorAll('[data-target="cart-form.item"][data-key]')).forEach(t=>{if(this.querySelector(`[data-key="${t.dataset.key}"]`))t.querySelectorAll('[data-target^="cart-form.item."]').forEach(a=>this.querySelector(`[data-key="${t.dataset.key}"] [data-target="${a.dataset.target}"]`).replaceWith(a)),this.querySelector(`[data-target="cart-form.item"][data-key="${t.dataset.key}"]`).toggleAttribute("data-loading",!1);else{let a=this.querySelector('[data-target="cart-form.items"]'),s=a.querySelector(`[data-target="cart-form.item"][data-index="${t.dataset.index-1}"]`);s?s.after(t):a.prepend(t)}}),this.querySelectorAll('[data-target="cart-form.footer"],[data-target="cart-form.form"],[data-target="cart-form.clear"]').forEach(t=>t.replaceWith(r.querySelector(`[data-target="${t.dataset.target}"]`)))}}),this.querySelector("form").addEventListener("change",debounce(async e=>{e.target.form.toggleAttribute("data-loading",!0),e.target.closest('[data-target="cart-form.item"]').toggleAttribute("data-loading",!0);let r=await fetch(`${routes.cart_change_url}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({line:e.target.dataset.index,quantity:e.target.value,sections:["cart-drawer"],sections_url:window.location.pathname})}).then(t=>t.json());publish("cartUpdate",r)},300))}disconnectedCallback(){this.unsubscribe()}});customElements.define("cart-count",class extends HTMLElement{async connectedCallback(){this.unsubscribe=subscribe("cartUpdate",({item_count:e})=>{e!==void 0&&(this.innerText=e,this.toggleAttribute("data-active",e>0))})}disconnectedCallback(){this.unsubscribe()}});var c=class extends HTMLElement{connectedCallback(){let e=this.querySelector("input"),r=()=>{e.min&&this.querySelector("button[name='minus']").toggleAttribute("disabled",parseInt(e.value)<=parseInt(e.min)),e.max&&this.querySelector("button[name='plus']").toggleAttribute("disabled",parseInt(e.value)>=parseInt(e.max))};this.querySelectorAll("button").forEach(t=>t.addEventListener("click",a=>{a.preventDefault();let s=e.value;a.currentTarget.name==="plus"?e.stepUp():a.currentTarget.name==="minus"?e.stepDown():e.value=0,s!==e.value&&e.dispatchEvent(new Event("change",{bubbles:!0}))})),this.querySelector("input").addEventListener("change",()=>{e.value>0&&(this.querySelector("span").innerText=e.value,r())})}};customElements.define("quantity-input",c);
