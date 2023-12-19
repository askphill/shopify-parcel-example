customElements.define(
  "cart-drawer",
  class CartDrawer extends HTMLElement {
    async connectedCallback() {
      this.unsubscribe = subscribe("cartUpdate", ({ sections }) => {
        if (sections && sections["cart-drawer"]) {
          const html = new DOMParser()
            .parseFromString(sections["cart-drawer"], "text/html")
            .querySelector("cart-drawer");

          const hasChangedItems =
            !Array.from(
              html.querySelectorAll('[data-target="cart-drawer.item"]')
            ).length ||
            Array.from(
              html.querySelectorAll('[data-target="cart-drawer.item"]')
            ).some(
              (i) =>
                !this.querySelector(
                  `[data-target="cart-drawer.item"][data-index="${i.getAttribute(
                    "data-index"
                  )}"][data-key="${i.getAttribute("data-key")}"]`
                )
            );

          if (hasChangedItems) {
            this.querySelector('[data-target="cart-drawer.items"]').replaceWith(
              html.querySelector('[data-target="cart-drawer.items"]')
            );
          } else {
            Array.from(
              html.querySelectorAll('[data-target="cart-drawer.item"]')
            ).forEach((i) => {
              this.querySelector(
                `[data-target="cart-drawer.item"][data-index="${i.getAttribute(
                  "data-index"
                )}"][data-key="${i.getAttribute(
                  "data-key"
                )}"] [data-target="cart-drawer.item-details"]`
              ).replaceWith(
                i.querySelector('[data-target="cart-drawer.item-details"]')
              );

              this.querySelector(
                `[data-target="cart-drawer.item"][data-index="${i.getAttribute(
                  "data-index"
                )}"][data-key="${i.getAttribute("data-key")}"]`
              ).toggleAttribute("data-loading", false);
            });
          }

          this.querySelector("footer").replaceWith(
            html.querySelector("footer")
          );

          this.querySelector('[data-target="cart-drawer.clear"]').replaceWith(
            html.querySelector('[data-target="cart-drawer.clear"]')
          );

          this.toggleAttribute("data-active", true);
          this.querySelector("form").toggleAttribute("data-loading", false);
        }
      });

      this.querySelector("form").addEventListener(
        "change",
        debounce(async (e) => {
          const item = e.target.closest('[data-target="cart-drawer.item"]');
          const form = e.target.form;

          item.toggleAttribute("data-loading", true);
          form.toggleAttribute("data-loading", true);

          const cart = await fetch(`${routes.cart_change_url}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              line: e.target.dataset.index,
              quantity: e.target.value,
              sections: ["cart-drawer"],
              sections_url: window.location.pathname,
            }),
          }).then((r) => r.json());

          publish("cartUpdate", cart);
        }, 500)
      );
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  }
);
