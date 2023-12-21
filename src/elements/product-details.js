customElements.define(
  'product-details',
  class ProductDetails extends HTMLElement {
    async connectedCallback() {
      this.unsubscribe = subscribe('variantUpdate', (sections) => {
        const html = new DOMParser()
          .parseFromString(sections['main-product'], 'text/html')
          .querySelector('product-details');

        this.querySelectorAll("[data-target^='product-details.']").forEach((e) =>
          e.replaceWith(html.querySelector(`[data-target="${e.getAttribute('data-target')}"]`)),
        );
      });
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  },
);
