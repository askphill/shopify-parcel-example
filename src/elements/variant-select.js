customElements.define(
  "variant-select",
  class VariantSelect extends HTMLElement {
    async connectedCallback() {
      const variantCache = {};

      // prefetch variants
      this.addEventListener(
        "mouseover",
        async () =>
          Array.from(this.querySelectorAll("input[type='radio']")).forEach(
            async (input) => {
              const queryStr = new URLSearchParams(window.location.search);
              queryStr.set("variant", input.value);
              queryStr.set("sections", "main-product");

              variantCache[input.value] = await fetch(
                `${window.location.pathname}?${queryStr}`
              ).then((r) => r.json());
            }
          ),
        {
          once: true,
        }
      );

      this.querySelectorAll("input[type='radio']").forEach((input) => {
        input.addEventListener("change", async () => {
          this.querySelector('[name="id"]').value = input.value;

          const queryStr = new URLSearchParams(window.location.search);
          queryStr.set("variant", input.value);

          // update url
          window.history.replaceState(
            null,
            null,
            `${window.location.pathname}?${queryStr}`
          );

          queryStr.set("sections", "main-product");

          const r = variantCache[input.value]
            ? variantCache[input.value]
            : await fetch(`${window.location.pathname}?${queryStr}`).then((r) =>
                r.json()
              );

          variantCache[input.value] = r;

          // update sections
          window.publish("variantUpdate", r);
        });
      });
    }
  }
);
