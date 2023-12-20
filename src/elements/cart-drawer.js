customElements.define(
  "cart-drawer",
  class CartDrawer extends HTMLElement {
    async connectedCallback() {
      this.unsubscribe = subscribe("cartUpdate", ({ sections }) => {
        // open on item add
        if (sections) this.toggleAttribute("data-active", true);
      });
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  }
);
