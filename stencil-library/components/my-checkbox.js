import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const myCheckboxCss = ":host{display:block}";
const MyCheckboxStyle0 = myCheckboxCss;

const MyCheckbox$1 = /*@__PURE__*/ proxyCustomElement(class MyCheckbox extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.myChange = createEvent(this, "myChange", 7);
        this.myFocus = createEvent(this, "myFocus", 7);
        this.myBlur = createEvent(this, "myBlur", 7);
        /**
         * Sets the checked property and emits
         * the myChange event. Use this to update the
         * checked state in response to user-generated
         * actions such as a click.
         */
        this.setChecked = (state) => {
            const isChecked = (this.checked = state);
            this.myChange.emit({
                checked: isChecked,
                value: this.value,
            });
        };
        this.toggleChecked = (ev) => {
            ev.preventDefault();
            this.setChecked(!this.checked);
            this.indeterminate = false;
        };
        this.onFocus = () => {
            this.myFocus.emit();
        };
        this.onBlur = () => {
            this.myBlur.emit();
        };
        this.onClick = (ev) => {
            if (this.disabled) {
                return;
            }
            this.toggleChecked(ev);
        };
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.value = 'on';
    }
    render() {
        return this.renderCheckbox();
    }
    renderCheckbox() {
        const { checked, disabled, indeterminate } = this;
        return (h(Host, { onClick: this.onClick }, h("input", { type: "checkbox", indeterminate: indeterminate, checked: checked ? true : undefined, disabled: disabled, onChange: this.toggleChecked, onFocus: () => this.onFocus(), onBlur: () => this.onBlur() })));
    }
    get el() { return this; }
    static get style() { return MyCheckboxStyle0; }
}, [1, "my-checkbox", {
        "checked": [1028],
        "indeterminate": [1028],
        "disabled": [4],
        "value": [8]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "my-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyCheckbox$1);
            }
            break;
    } });
}

const MyCheckbox = MyCheckbox$1;
const defineCustomElement = defineCustomElement$1;

export { MyCheckbox, defineCustomElement };

//# sourceMappingURL=my-checkbox.js.map