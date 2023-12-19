class QuantityInput extends HTMLElement {
  quantityUpdateUnsubscriber = undefined;

  connectedCallback() {
    const input = this.querySelector("input");

    const validateQtyRules = () => {
      const value = parseInt(input.value);

      if (input.min) {
        this.querySelector("button[name='minus']").toggleAttribute(
          "disabled",
          value <= parseInt(input.min)
        );
      }
      if (input.max) {
        this.querySelector("button[name='plus']").toggleAttribute(
          "disabled",
          value >= parseInt(input.max)
        );
      }
    };

    this.quantityUpdateUnsubscriber = subscribe(
      "quantityUpdate",
      validateQtyRules
    );

    this.querySelectorAll("button").forEach((button) =>
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const previousValue = input.value;
        console.log(e.currentTarget.name);

        e.currentTarget.name === "plus"
          ? input.stepUp()
          : e.currentTarget.name === "minus"
          ? input.stepDown()
          : (input.value = 0);

        if (previousValue !== input.value)
          input.dispatchEvent(new Event("change", { bubbles: true }));
      })
    );

    this.querySelector("input").addEventListener("change", (event) => {
      validateQtyRules();
    });
  }

  disconnectedCallback() {
    if (this.quantityUpdateUnsubscriber) this.quantityUpdateUnsubscriber();
  }
}

customElements.define("quantity-input", QuantityInput);
