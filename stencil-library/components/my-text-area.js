import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const myTextAreaCss = ":host{display:block}";
const MyTextAreaStyle0 = myTextAreaCss;

const MyTextArea$1 = /*@__PURE__*/ proxyCustomElement(class MyTextArea extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.myBlur = createEvent(this, "myBlur", 7);
        this.myFocus = createEvent(this, "myFocus", 7);
        this.myChange = createEvent(this, "myChange", 7);
        this.myInput = createEvent(this, "myInput", 7);
        this.onFocus = (ev) => {
            this.myFocus.emit(ev);
        };
        this.onBlur = (ev) => {
            this.myBlur.emit(ev);
        };
        this.onChange = (ev) => {
            this.emitValueChange(ev);
        };
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.emitInputChange(ev);
        };
        this.value = '';
    }
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        const nativeInput = this.nativeInput;
        const value = this.getValue();
        if (nativeInput && nativeInput.value !== value) {
            nativeInput.value = value;
        }
    }
    getValue() {
        return this.value || '';
    }
    /**
     * Emits an `myChange` event.
     *
     * This API should be called for user committed changes.
     * This API should not be used for external value changes.
     */
    emitValueChange(event) {
        const { value } = this;
        // Checks for both null and undefined values
        const newValue = value == null ? value : value.toString();
        this.myChange.emit({ value: newValue, event });
    }
    /**
     * Emits an `myInput` event.
     */
    emitInputChange(event) {
        const { value } = this;
        this.myInput.emit({ value, event });
    }
    render() {
        const value = this.getValue();
        return (h(Host, { key: 'dee1386a94ea45ae3d74e37607f6fd81896c66c5' }, h("textarea", { key: '7960f5990f4150dec1359b71451f1c8d1be666f3', ref: el => (this.nativeInput = el), onChange: this.onChange, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus }, value)));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return MyTextAreaStyle0; }
}, [1, "my-text-area", {
        "value": [1025]
    }, undefined, {
        "value": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-text-area"];
    components.forEach(tagName => { switch (tagName) {
        case "my-text-area":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyTextArea$1);
            }
            break;
    } });
}

const MyTextArea = MyTextArea$1;
const defineCustomElement = defineCustomElement$1;

export { MyTextArea, defineCustomElement };

//# sourceMappingURL=my-text-area.js.map