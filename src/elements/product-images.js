customElements.define(
  "product-images",
  class ProductImages extends HTMLElement {
    async connectedCallback() {
      const Splide = (await import("@splidejs/splide")).default;
      new Splide(this.querySelector(".splide"), { arrows: false }).mount();

      this.unsubscribe = subscribe("variantUpdate", (sections) => {
        const html = new DOMParser()
          .parseFromString(sections["main-product"], "text/html")
          .querySelector("product-images");

        this.replaceWith(html);
      });
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  }
);
