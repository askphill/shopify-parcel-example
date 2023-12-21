customElements.define(
  'cart-form',
  class CartForm extends HTMLElement {
    connectedCallback() {
      this.unsubscribe = subscribe('cartUpdate', ({ sections: { ['cart-drawer']: section } = {} }) => {
        this.querySelector('form').toggleAttribute('data-loading', false);

        if (section) {
          const html = new DOMParser().parseFromString(section, 'text/html').querySelector('cart-form');

          // remove items
          Array.from(this.querySelectorAll('[data-target="cart-form.item"][data-key]')).forEach((item) => {
            if (!html.querySelector(`[data-key="${item.dataset.key}"]`)) item.remove();
          });

          // add or update items
          Array.from(html.querySelectorAll('[data-target="cart-form.item"][data-key]')).forEach((item) => {
            if (!this.querySelector(`[data-key="${item.dataset.key}"]`)) {
              const target = this.querySelector(`[data-target="cart-form.items"]`);
              const before = target.querySelector(
                `[data-target="cart-form.item"][data-index="${item.dataset.index - 1}"]`,
              );

              if (before) {
                before.after(item);
              } else {
                target.prepend(item);
              }
            } else {
              item.querySelectorAll('[data-target^="cart-form.item."]').forEach((e) => {
                this.querySelector(`[data-key="${item.dataset.key}"] [data-target="${e.dataset.target}"]`).replaceWith(
                  e,
                );
              });

              this.querySelector(`[data-target="cart-form.item"][data-key="${item.dataset.key}"]`).toggleAttribute(
                'data-loading',
                false,
              );
            }
          });

          // update subtotal
          this.querySelectorAll(
            '[data-target="cart-form.footer"],[data-target="cart-form.form"],[data-target="cart-form.clear"]',
          ).forEach((e) => e.replaceWith(html.querySelector(`[data-target="${e.dataset.target}"]`)));
        }
      });

      // listen to quantity changes
      this.querySelector('form').addEventListener(
        'change',
        debounce(async (e) => {
          e.target.form.toggleAttribute('data-loading', true);

          e.target.closest('[data-target="cart-form.item"]').toggleAttribute('data-loading', true);

          const cart = await fetch(`${routes.cart_change_url}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              line: e.target.dataset.index,
              quantity: e.target.value,
              sections: ['cart-drawer'],
              sections_url: window.location.pathname,
            }),
          }).then((r) => r.json());

          publish('cartUpdate', cart);
        }, 300),
      );
    }

    disconnectedCallback() {
      this.unsubscribe();
    }
  },
);
