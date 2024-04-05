import type { EventEmitter } from '@stencil/core';
import { Component, Element, Event, Host, Prop, Watch, h } from '@stencil/core';
import type { InputChangeEventDetail, InputInputEventDetail } from './input-interface';
import { InputType } from './input-type';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
})
export class MyInput {
  private nativeInput?: HTMLInputElement;

  @Element() el!: HTMLMyInputElement;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: InputType = 'text';

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  /**
   * The `myInput` event is fired each time the user modifies the input's value.
   * Unlike the `myChange` event, the `myInput` event is fired for each alteration
   * to the input's value. This typically happens for each keystroke as the user types.
   *
   * For elements that accept text input (`type=text`, `type=tel`, etc.), the interface
   * is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others,
   * the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If
   * the input is cleared on edit, the type is `null`.
   */
  @Event() myInput!: EventEmitter<InputInputEventDetail>;

  /**
   * The `myChange` event is fired when the user modifies the input's value.
   * Unlike the `myInput` event, the `myChange` event is only fired when changes
   * are committed, not as the user types.
   *
   * Depending on the way the users interacts with the element, the `myChange`
   * event fires at a different moment:
   * - When the user commits the change explicitly (e.g. by selecting a date
   * from a date picker for `<my-input type="date">`, pressing the "Enter" key, etc.).
   * - When the element loses focus after its value has changed: for elements
   * where the user's interaction is typing.
   */
  @Event() myChange!: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() myBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has focus.
   */
  @Event() myFocus!: EventEmitter<FocusEvent>;

  /**
   * Update the native input element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
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
  private emitValueChange(event?: Event) {
    const { value } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    this.myChange.emit({ value: newValue as any, event });
  }

  /**
   * Emits an `myInput` event.
   */
  private emitInputChange(event?: Event) {
    const { value } = this;

    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    this.myInput.emit({ value: newValue as any, event });
  }

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }

  private onInput = (ev: InputEvent | Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.emitInputChange(ev);
  };

  private onChange = (ev: Event) => {
    this.emitValueChange(ev);
  };

  private onBlur = (ev: FocusEvent) => {
    this.myBlur.emit(ev);
  };

  private onFocus = (ev: FocusEvent) => {
    this.myFocus.emit(ev);
  };

  private renderInput() {
    const { disabled } = this;
    const value = this.getValue();

    return (
      <Host>
        <input
          ref={input => (this.nativeInput = input)}
          disabled={disabled}
          required={this.required}
          type={this.type}
          value={value}
          onInput={this.onInput}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
      </Host>
    );
  }

  render() {
    return this.renderInput();
  }
}
