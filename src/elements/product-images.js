customElements.define(
  'product-images',
  class ProductImages extends HTMLElement {
    connectedCallback() {
      // wrapped in function to not block main thread
      (async () => {
        // when in viewport
        await visible(this);

        // lazy load splide
        new (await import('@splidejs/splide')).default(this.querySelector('.splide'), {
          arrows: false,
          pagination: false,
        }).mount();
      })();

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
