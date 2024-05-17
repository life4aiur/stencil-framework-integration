/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CheckboxChangeEventDetail } from "./components/my-checkbox/checkbox-interface";
import { InputChangeEventDetail, InputInputEventDetail } from "./components/my-input/input-interface";
import { TextareaChangeEventDetail, TextareaInputEventDetail } from "./components/my-text-area/textarea-interface";
export { CheckboxChangeEventDetail } from "./components/my-checkbox/checkbox-interface";
export { InputChangeEventDetail, InputInputEventDetail } from "./components/my-input/input-interface";
export { TextareaChangeEventDetail, TextareaInputEventDetail } from "./components/my-text-area/textarea-interface";
export namespace Components {
    interface MyCheckbox {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked": boolean;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled": boolean;
        /**
          * If `true`, the checkbox will visually appear as indeterminate.
         */
        "indeterminate": boolean;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`.
         */
        "value": any | null;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyInput {
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * The value of the input.
         */
        "value": string;
    }
    interface MyTextArea {
        /**
          * The value of the textarea.
         */
        "value"?: string | null;
    }
}
export interface MyCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyCheckboxElement;
}
export interface MyInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyInputElement;
}
export interface MyTextAreaCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyTextAreaElement;
}
declare global {
    interface HTMLMyCheckboxElementEventMap {
        "myChange": CheckboxChangeEventDetail;
        "myFocus": void;
        "myBlur": void;
    }
    interface HTMLMyCheckboxElement extends Components.MyCheckbox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyCheckboxElementEventMap>(type: K, listener: (this: HTMLMyCheckboxElement, ev: MyCheckboxCustomEvent<HTMLMyCheckboxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyCheckboxElementEventMap>(type: K, listener: (this: HTMLMyCheckboxElement, ev: MyCheckboxCustomEvent<HTMLMyCheckboxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyCheckboxElement: {
        prototype: HTMLMyCheckboxElement;
        new (): HTMLMyCheckboxElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyInputElementEventMap {
        "myInput": InputInputEventDetail;
        "myChange": InputChangeEventDetail;
        "myBlur": FocusEvent;
        "myFocus": FocusEvent;
    }
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyInputElementEventMap>(type: K, listener: (this: HTMLMyInputElement, ev: MyInputCustomEvent<HTMLMyInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyInputElementEventMap>(type: K, listener: (this: HTMLMyInputElement, ev: MyInputCustomEvent<HTMLMyInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyTextAreaElementEventMap {
        "myBlur": FocusEvent;
        "myFocus": FocusEvent;
        "myChange": TextareaChangeEventDetail;
        "myInput": TextareaInputEventDetail;
    }
    interface HTMLMyTextAreaElement extends Components.MyTextArea, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMyTextAreaElementEventMap>(type: K, listener: (this: HTMLMyTextAreaElement, ev: MyTextAreaCustomEvent<HTMLMyTextAreaElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMyTextAreaElementEventMap>(type: K, listener: (this: HTMLMyTextAreaElement, ev: MyTextAreaCustomEvent<HTMLMyTextAreaElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMyTextAreaElement: {
        prototype: HTMLMyTextAreaElement;
        new (): HTMLMyTextAreaElement;
    };
    interface HTMLElementTagNameMap {
        "my-checkbox": HTMLMyCheckboxElement;
        "my-component": HTMLMyComponentElement;
        "my-input": HTMLMyInputElement;
        "my-text-area": HTMLMyTextAreaElement;
    }
}
declare namespace LocalJSX {
    interface MyCheckbox {
        /**
          * If `true`, the checkbox is selected.
         */
        "checked"?: boolean;
        /**
          * If `true`, the user cannot interact with the checkbox.
         */
        "disabled"?: boolean;
        /**
          * If `true`, the checkbox will visually appear as indeterminate.
         */
        "indeterminate"?: boolean;
        /**
          * The mode determines which platform styles to use.
         */
        "mode"?: "ios" | "md";
        /**
          * Emitted when the checkbox loses focus.
         */
        "onMyBlur"?: (event: MyCheckboxCustomEvent<void>) => void;
        /**
          * Emitted when the checked property has changed as a result of a user action such as a click. This event will not emit when programmatically setting the checked property.
         */
        "onMyChange"?: (event: MyCheckboxCustomEvent<CheckboxChangeEventDetail>) => void;
        /**
          * Emitted when the checkbox has focus.
         */
        "onMyFocus"?: (event: MyCheckboxCustomEvent<void>) => void;
        /**
          * The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`.
         */
        "value"?: any | null;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyInput {
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * Emitted when the input loses focus.
         */
        "onMyBlur"?: (event: MyInputCustomEvent<FocusEvent>) => void;
        /**
          * The `myChange` event is fired when the user modifies the input's value. Unlike the `myInput` event, the `myChange` event is only fired when changes are committed, not as the user types.  Depending on the way the users interacts with the element, the `myChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<my-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the user's interaction is typing.
         */
        "onMyChange"?: (event: MyInputCustomEvent<InputChangeEventDetail>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onMyFocus"?: (event: MyInputCustomEvent<FocusEvent>) => void;
        /**
          * The `myInput` event is fired each time the user modifies the input's value. Unlike the `myChange` event, the `myInput` event is fired for each alteration to the input's value. This typically happens for each keystroke as the user types.  For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others, the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If the input is cleared on edit, the type is `null`.
         */
        "onMyInput"?: (event: MyInputCustomEvent<InputInputEventDetail>) => void;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The value of the input.
         */
        "value"?: string;
    }
    interface MyTextArea {
        /**
          * Emitted when the input loses focus.
         */
        "onMyBlur"?: (event: MyTextAreaCustomEvent<FocusEvent>) => void;
        /**
          * The `myChange` event is fired when the user modifies the textarea's value.
         */
        "onMyChange"?: (event: MyTextAreaCustomEvent<TextareaChangeEventDetail>) => void;
        /**
          * Emitted when the input has focus.
         */
        "onMyFocus"?: (event: MyTextAreaCustomEvent<FocusEvent>) => void;
        /**
          * The `myInput` event is fired when the user modifies the textarea's value.
         */
        "onMyInput"?: (event: MyTextAreaCustomEvent<TextareaInputEventDetail>) => void;
        /**
          * The value of the textarea.
         */
        "value"?: string | null;
    }
    interface IntrinsicElements {
        "my-checkbox": MyCheckbox;
        "my-component": MyComponent;
        "my-input": MyInput;
        "my-text-area": MyTextArea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-checkbox": LocalJSX.MyCheckbox & JSXBase.HTMLAttributes<HTMLMyCheckboxElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-text-area": LocalJSX.MyTextArea & JSXBase.HTMLAttributes<HTMLMyTextAreaElement>;
        }
    }
}
