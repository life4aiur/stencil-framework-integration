/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CheckboxChangeEventDetail } from "./components/my-checkbox/checkbox-interface";
import { TextareaChangeEventDetail, TextareaInputEventDetail } from "./components/my-text-area/textarea-interface";
export { CheckboxChangeEventDetail } from "./components/my-checkbox/checkbox-interface";
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
        "my-text-area": MyTextArea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-checkbox": LocalJSX.MyCheckbox & JSXBase.HTMLAttributes<HTMLMyCheckboxElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-text-area": LocalJSX.MyTextArea & JSXBase.HTMLAttributes<HTMLMyTextAreaElement>;
        }
    }
}
