const buttonTemplate = document.createElement("template");
buttonTemplate.innerHTML = `<button class="button"></button>`;

class MyButton extends HTMLElement {
    constructor() {
        super();
        var shadow = this.attachShadow({ mode: "closed" }); // open

        var content = buttonTemplate.content.cloneNode(true);
        this.$button = content.querySelector(".button");
        this.$button.addEventListener("click", function() {
            console.log("hello, button clicked");
            this.dispatchEvent(new CustomEvent("onClick"));
        });
        shadow.appendChild(content);
        this.render();
    }

    get label() {
        return this.getAttribute("label");
    }

    set label(value) {
        this.setAttribute("label", value);
    }

    static get observedAttributes() {
        return ["label"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }

    render() {
        this.$button.innerHTML = this.label;
    }
}
window.customElements.define("my-button", MyButton);
