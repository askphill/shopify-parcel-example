customElements.define(
  'product-images',
  class ProductImages extends HTMLElement {
    async connectedCallback() {
      // lazy load + initialize splide
      visible(this).then(async () => {
        const { default: Splide } = await import('@splidejs/splide');

        new Splide(this.querySelector('.splide'), {
          arrows: false,
          pagination: false,
        }).mount();
      });

      this.unsubscribe = subscribe('variantUpdate', (sections) => {
        const html = new DOMParser()
          .parseFromString(sections['main-product'], 'text/html')
          .querySelector('product-images');

        this.replaceWith(html);
      });
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  },
);
