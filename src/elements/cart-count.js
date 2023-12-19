customElements.define(
  "cart-count",
  class CartCount extends HTMLElement {
    async connectedCallback() {
      this.unsubscribe = subscribe("cartUpdate", ({ item_count: count }) => {
        if (count !== undefined) {
          this.innerText = count;
          this.toggleAttribute("data-active", count > 0);
        }
      });
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  }
);
