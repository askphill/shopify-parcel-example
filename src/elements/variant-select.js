customElements.define(
  "variant-select",
  class VariantSelect extends HTMLElement {
    async connectedCallback() {
      const variantCache = {};

      // prefetch variants
      const prefetchVariants = async () =>
        Array.from(this.querySelectorAll("input[type='radio']")).forEach(
          async (input) => {
            const query = new URLSearchParams(window.location.search);
            query.set("variant", input.value);
            query.set("sections", "main-product");

            variantCache[input.value] = await fetch(
              `${window.location.pathname}?${query}`
            ).then((r) => r.json());
          }
        );

      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        this.addEventListener("mouseover", prefetchVariants, {
          once: true,
        });
      } else {
        new Promise((resolve) => requestIdleCallback(resolve)).then(
          prefetchVariants
        );
      }

      this.querySelectorAll("input[type='radio'][name='variant']").forEach(
        (input) => {
          input.addEventListener("change", async () => {
            input.form.querySelector('[name="id"]').value = input.value;

            const query = new URLSearchParams(window.location.search);
            query.set("variant", input.value);

            // update url
            window.history.replaceState(
              null,
              null,
              `${window.location.pathname}?${query}`
            );

            // fetch sections
            query.set("sections", "main-product");

            const r = variantCache[input.value]
              ? variantCache[input.value]
              : await fetch(`${window.location.pathname}?${query}`).then((r) =>
                  r.json()
                );

            variantCache[input.value] = r;

            // update sections
            window.publish("variantUpdate", r);
          });
        }
      );
    }
  }
);
