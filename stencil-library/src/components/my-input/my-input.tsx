import type { EventEmitter } from '@stencil/core';
import { AttachInternals, Component, Element, Event, Host, Prop, Watch, h } from '@stencil/core';
import type { InputChangeEventDetail, InputInputEventDetail } from './input-interface';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: true,
  formAssociated: true,
})
export class MyInput {
  @Element() el!: HTMLMyInputElement;

  @AttachInternals() internals: ElementInternals;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * The value of the input.
   */
  @Prop() value: string;

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
    this.myChange.emit({ value: this.value as any, event });
  }

  async componentWillLoad(): Promise<void> {
    this.internals.setFormValue(null);
  }

  handleChange(event): void {
    this.value = event.target.value;
    this.internals.setFormValue(this.value);
    this.myChange.emit({ value: this.value as any, event });
    this.validate();
  }

  handleInput(event): void {
    this.value = event.target.value;
    this.internals.setFormValue(this.value);
    this.myInput.emit({ value: this.value as any, event });
    this.validate();
  }

  validate(): void {
    // TODO: there should be a hierarchy of severity here, since only one message can be set.
    this.internals.setValidity(
      {
        badInput: this.value && /\d/.test(this.value),
        tooLong: this.value && this.value.length > 10,
        tooShort: this.value && this.value.length < 2,
        valueMissing: this.required && !this.value,
      },
      'This is an invalid value',
    );

    // This will flag the form fields as invalid for the browser to handle natively, it will also emit an `input` event
    this.internals.reportValidity();
  }

  private onBlur = (ev: FocusEvent) => {
    this.myBlur.emit(ev);
  };

  private onFocus = (ev: FocusEvent) => {
    this.myFocus.emit(ev);
  };

  private renderInput() {
    const { disabled } = this;

    return (
      <Host>
        <input
          value={this.value}
          disabled={disabled}
          required={this.required}
          type="text"
          onChange={event => this.handleChange(event)}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onInput={event => this.handleInput(event)}
        />
      </Host>
    );
  }

  render() {
    return this.renderInput();
  }
}
