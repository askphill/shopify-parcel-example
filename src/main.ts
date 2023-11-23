(document.querySelector(".js") as HTMLElement)!.setAttribute("data-active", "");

import "@/lib/static";

import("@/lib/dynamic").then(({ default: dynamic }) => dynamic());

import("@splidejs/splide").then(() => {
  document.querySelector(".js-dynamic-module")!.setAttribute("data-active", "");
  console.log(
    `✅ ${document.querySelector(".js-dynamic-module")!.textContent!.trim()}`
  );
});
