customElements.define(
  "clear-cart-button",
  class ClearCartButton extends HTMLElement {
    async connectedCallback() {
      this.querySelector("button").addEventListener("click", async () => {
        const cart = await fetch(routes.cart_clear_url, {
          method: "POST",
          headers: { Accept: "application/json" },
        }).then((r) => r.json());

        publish("cartUpdate", {
          ...cart,
          sections: await fetch(
            `${window.location.pathname}?sections=cart-drawer`
          ).then((r) => r.json()),
        });
      });
    }
  }
);
