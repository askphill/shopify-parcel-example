export default () => {
  document.querySelector(".js-dynamic").setAttribute("data-active", "");
  console.log(`✅ ${document.querySelector(".js-dynamic").textContent.trim()}`);
};
