# my-input



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                        | Type      | Default     |
| ---------- | ---------- | ------------------------------------------------------------------ | --------- | ----------- |
| `disabled` | `disabled` | If `true`, the user cannot interact with the input.                | `boolean` | `false`     |
| `required` | `required` | If `true`, the user must fill in a value before submitting a form. | `boolean` | `false`     |
| `value`    | `value`    | The value of the input.                                            | `string`  | `undefined` |


## Events

| Event      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `myBlur`   | Emitted when the input loses focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | `CustomEvent<FocusEvent>`             |
| `myChange` | The `myChange` event is fired when the user modifies the input's value. Unlike the `myInput` event, the `myChange` event is only fired when changes are committed, not as the user types.  Depending on the way the users interacts with the element, the `myChange` event fires at a different moment: - When the user commits the change explicitly (e.g. by selecting a date from a date picker for `<my-input type="date">`, pressing the "Enter" key, etc.). - When the element loses focus after its value has changed: for elements where the user's interaction is typing. | `CustomEvent<InputChangeEventDetail>` |
| `myFocus`  | Emitted when the input has focus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | `CustomEvent<FocusEvent>`             |
| `myInput`  | The `myInput` event is fired each time the user modifies the input's value. Unlike the `myChange` event, the `myInput` event is fired for each alteration to the input's value. This typically happens for each keystroke as the user types.  For elements that accept text input (`type=text`, `type=tel`, etc.), the interface is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others, the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If the input is cleared on edit, the type is `null`.              | `CustomEvent<InputInputEventDetail>`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
