customElements.define(
  'product-images',
  class ProductImages extends HTMLElement {
    async connectedCallback() {
      await inView(this);

      new (await import('@splidejs/splide')).default(this.querySelector('.splide'), {
        arrows: false,
        pagination: false,
      }).mount();

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
