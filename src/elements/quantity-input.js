class QuantityInput extends HTMLElement {
  connectedCallback() {
    const input = this.querySelector("input");

    const validateQuantity = () => {
      if (input.min)
        this.querySelector("button[name='minus']").toggleAttribute(
          "disabled",
          parseInt(input.value) <= parseInt(input.min)
        );

      if (input.max)
        this.querySelector("button[name='plus']").toggleAttribute(
          "disabled",
          parseInt(input.value) >= parseInt(input.max)
        );
    };

    this.querySelectorAll("button").forEach((button) =>
      button.addEventListener("click", (e) => {
        e.preventDefault();

        const previousValue = input.value;

        e.currentTarget.name === "plus"
          ? input.stepUp()
          : e.currentTarget.name === "minus"
            ? input.stepDown()
            : (input.value = 0);

        if (previousValue !== input.value)
          input.dispatchEvent(new Event("change", { bubbles: true }));
      })
    );

    this.querySelector("input").addEventListener("change", () => {
      // because we use 0 to remove the item from the cart, but don't want to display it
      if (input.value > 0) {
        this.querySelector("span").innerText = input.value;
        validateQuantity();
      }
    });
  }
}

customElements.define("quantity-input", QuantityInput);
