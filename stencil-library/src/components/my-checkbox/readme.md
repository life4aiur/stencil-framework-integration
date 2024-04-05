# my-checkbox



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                                                                                                                                  | Type            | Default     |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ----------- |
| `checked`       | `checked`       | If `true`, the checkbox is selected.                                                                                                                                                                                                                         | `boolean`       | `false`     |
| `disabled`      | `disabled`      | If `true`, the user cannot interact with the checkbox.                                                                                                                                                                                                       | `boolean`       | `false`     |
| `indeterminate` | `indeterminate` | If `true`, the checkbox will visually appear as indeterminate.                                                                                                                                                                                               | `boolean`       | `false`     |
| `mode`          | `mode`          | The mode determines which platform styles to use.                                                                                                                                                                                                            | `"ios" \| "md"` | `undefined` |
| `value`         | `value`         | The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`. | `any`           | `'on'`      |


## Events

| Event      | Description                                                                                                                                                              | Type                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| `myBlur`   | Emitted when the checkbox loses focus.                                                                                                                                   | `CustomEvent<void>`                           |
| `myChange` | Emitted when the checked property has changed as a result of a user action such as a click. This event will not emit when programmatically setting the checked property. | `CustomEvent<CheckboxChangeEventDetail<any>>` |
| `myFocus`  | Emitted when the checkbox has focus.                                                                                                                                     | `CustomEvent<void>`                           |


## Slots

| Slot | Description                                                                                                                                     |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
|      | The label text to associate with the checkbox. Use the "labelPlacement" property to control where the label is placed relative to the checkbox. |


## Shadow Parts

| Part          | Description                                       |
| ------------- | ------------------------------------------------- |
| `"container"` | The container for the checkbox mark.              |
| `"label"`     | The label text describing the checkbox.           |
| `"mark"`      | The checkmark used to indicate the checked state. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
