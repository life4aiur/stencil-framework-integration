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
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || '';
            }
            this.emitInputChange(ev);
        };
        this.onChange = (ev) => {
            this.emitValueChange(ev);
        };
        this.onBlur = (ev) => {
            this.myBlur.emit(ev);
        };
        this.onFocus = (ev) => {
            this.myFocus.emit(ev);
        };
        this.disabled = false;
        this.required = false;
        this.type = 'text';
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
        // Checks for both null and undefined values
        const newValue = value == null ? value : value.toString();
        this.myInput.emit({ value: newValue, event });
    }
    getValue() {
        return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
    }
    renderInput() {
        const { disabled } = this;
        const value = this.getValue();
        return (h(Host, null, h("input", { ref: input => (this.nativeInput = input), disabled: disabled, required: this.required, type: this.type, value: value, onInput: this.onInput, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus })));
    }
    render() {
        return this.renderInput();
    }
    get el() { return this; }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return MyInputStyle0; }
}, [1, "my-input", {
        "disabled": [4],
        "required": [4],
        "type": [1],
        "value": [1032]
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