const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
        font-family: sans-serif;
    }
    .dropdown {
        padding: 3px 8px 8px;
        display: inline-block;
    }
    .label {
        display: block;
        margin-bottom: 5px;
        color: #000000;
        font-size: 16px;
        font-weight: normal;
        line-height: 16px;
    }
    .dropdown-list-container {
        position: relative;
    }
    .dropdown-list {
        position: absolute;
        display: none;
        max-height: 192px;
        overflow-y: auto;
        margin: 4px 0 0;
        padding: 0;
        background-color: #ffffff;
        border: 1px solid #a1a1a1;
        box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
        list-style: none;
    }
    .dropdown-list li {
        display: flex;
        align-items: center;
        padding: 0 7px;
        font-size: 16px;
        height: 40px;
        cursor: pointer;
    }
    .dropdown-list li:hover {
        background: #eee;
    }
    .dropdown-list li.active, .dropdown-list li.active:hover {
        font-weight: 600;
        background: blue;
    }
    .dropdown-list.open {
        display: flex;
        flex-direction: column;
    }
  </style>
  <div class="dropdown">
    <span class="label">Label</span>
    <my-button as-atom>Content</my-button>
    <div class="dropdown-list-container">
      <ul class="dropdown-list"></ul>
    </div>
  </div>
`;

class Dropdown extends HTMLElement {
    constructor() {
        super();
        this.isOpen = false;
        this._sR = this.attachShadow({ mode: "open" });
        this._sR.appendChild(template.content.cloneNode(true));
        this.$label = this._sR.querySelector(".label");
        this.$button = this._sR.querySelector("my-button");
        this.$dropdownList = this._sR.querySelector(".dropdown-list");
        this.$button.addEventListener("click", () => {
            this.toggleOpen();
        });
    }
    static get observedAttributes() {
        return ["label", "option", "options"];
    }
    get label() {
        return this.getAttribute("label");
    }
    set label(value) {
        this.setAttribute("label", value);
    }
    get value() {
        return this.getAttribute("value");
    }
    set value(value) {
        this.setAttribute("value", value);
    }
    get options() {
        return JSON.parse(this.getAttribute("options"));
    }
    set options(value) {
        this.setAttribute("options", JSON.stringify(value));
    }
    static get observedAttributes() {
        return ["label", "value", "options"];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this.render();
    }
    toggleOpen = () => {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.$dropdownList.classList.add("open");
        } else {
            this.$dropdownList.classList.remove("open");
        }
    };
    render() {
        this.$label.innerHTML = this.label;
        const findOption = this.options.find(op => op.value === this.value) || {};
        this.$button.setAttribute("label", findOption.label || "please select");
        this.$dropdownList.innerHTML = "";
        this.options.forEach(({ value, label }) => {
            const option = document.createElement("li");
            option.innerHTML = label;
            if (this.value === value) {
                option.classList.add("active");
            }
            this.$dropdownList.appendChild(option);
            option.addEventListener("click", () => {
                this.value = value;
                this.toggleOpen();
                this.dispatchEvent(new CustomEvent("onChange", { detail: value }));
            });
        });
    }
}
window.customElements.define("my-dropdown", Dropdown);
