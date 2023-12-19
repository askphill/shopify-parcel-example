customElements.define(
  "product-details",
  class ProductDetails extends HTMLElement {
    async connectedCallback() {
      this.unsubscribe = subscribe("variantUpdate", (sections) => {
        const html = new DOMParser()
          .parseFromString(sections["main-product"], "text/html")
          .querySelector("product-details");

        this.querySelector('[data-target="price"]').replaceWith(
          html.querySelector('[data-target="price"]')
        );
      });
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  }
);
