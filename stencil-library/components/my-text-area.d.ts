import type { Components, JSX } from "../dist/types/components";

interface MyTextArea extends Components.MyTextArea, HTMLElement {}
export const MyTextArea: {
    prototype: MyTextArea;
    new (): MyTextArea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
