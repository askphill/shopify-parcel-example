customElements.define(
  "product-form",
  class ProductForm extends HTMLElement {
    async connectedCallback() {
      this.querySelector("form").addEventListener("submit", async (event) => {
        event.preventDefault();

        event.submitter.toggleAttribute("data-loading", true);

        const form = event.target;
        const formData = new FormData(form);

        formData.append("sections", ["cart-drawer"]);
        formData.append("sections_url", window.location.pathname);

        await fetch(routes.cart_add_url, {
          method: "POST",
          body: formData,
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
          },
        })
          .then((r) => r.json())
          // TODO: handle errors
          .then((r) => publish("cartUpdate", r));

        await fetch(routes.cart_url, {
          method: "GET",
          headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
          },
        })
          .then((r) => r.json())
          .then((r) => publish("cartUpdate", r));

        event.submitter.toggleAttribute("data-loading", false);
      });
    }
  }
);
