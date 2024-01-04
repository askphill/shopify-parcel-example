customElements.define(
  'product-images',
  class ProductImages extends HTMLElement {
    async connectedCallback() {
      // non-blocking code first
      this.unsubscribe = subscribe('variantUpdate', (sections) => {
        const html = new DOMParser()
          .parseFromString(sections['main-product'], 'text/html')
          .querySelector('product-images');

        this.replaceWith(html);
      });

      // when in viewport
      await visible(this);

      // lazy load splide
      new (await import('@splidejs/splide')).default(this.querySelector('.splide'), {
        arrows: false,
        pagination: false,
      }).mount();
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  },
);
