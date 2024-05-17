import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const myInputCss = ":host{display:block}";
const MyInputStyle0 = myInputCss;

const MyInput$1 = /*@__PURE__*/ proxyCustomElement(class MyInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.myInput = createEvent(this, "myInput", 7);
        this.myChange = createEvent(this, "myChange", 7);
        this.myBlur = createEvent(this, "myBlur", 7);
        this.myFocus = createEvent(this, "myFocus", 7);
        this.internals = this.attachInternals();
        this.onBlur = (ev) => {
            this.myBlur.emit(ev);
        };
        this.onFocus = (ev) => {
            this.myFocus.emit(ev);
        };
        this.disabled = false;
        this.required = false;
        this.value = undefined;
    }
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        this.myChange.emit({ value: this.value, event });
    }
    async componentWillLoad() {
        this.internals.setFormValue(null);
    }
    handleChange(event) {
        this.value = event.target.value;
        this.internals.setFormValue(this.value);
        this.myChange.emit({ value: this.value, event });
        this.validate();
    }
    handleInput(event) {
        this.value = event.target.value;
        this.internals.setFormValue(this.value);
        this.myInput.emit({ value: this.value, event });
        this.validate();
    }
    validate() {
        this.internals.setValidity({
            badInput: this.value && /\d/.test(this.value),
            tooLong: this.value && this.value.length > 10,
            tooShort: this.value && this.value.length < 2,
            valueMissing: this.required && !this.value,
        }, 'This is an invalid value');
        // This will flag the form fields as invalid for the browser to handle natively, it will also emit an `input` event
        this.internals.reportValidity();
    }
    renderInput() {
        const { disabled } = this;
        return (h(Host, null, h("input", { value: this.value, disabled: disabled, required: this.required, type: "text", onChange: event => this.handleChange(event), onBlur: this.onBlur, onFocus: this.onFocus, onInput: event => this.handleInput(event) })));
    }
    render() {
        return this.renderInput();
    }
    static get formAssociated() { return true; }
    get el() { return this; }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return MyInputStyle0; }
}, [65, "my-input", {
        "disabled": [4],
        "required": [4],
        "value": [1]
    }, undefined, {
        "value": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-input"];
    components.forEach(tagName => { switch (tagName) {
        case "my-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyInput$1);
            }
            break;
    } });
}

const MyInput = MyInput$1;
const defineCustomElement = defineCustomElement$1;

export { MyInput, defineCustomElement };

//# sourceMappingURL=my-input.js.map