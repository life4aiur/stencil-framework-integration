import { Component, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { TextareaChangeEventDetail, TextareaInputEventDetail } from './textarea-interface';

@Component({
  tag: 'my-text-area',
  styleUrl: 'my-text-area.css',
  shadow: true,
})
export class MyTextArea {
  private nativeInput?: HTMLTextAreaElement;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true }) value?: string | null = '';

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
   * Emitted when the input loses focus.
   */
  @Event() myBlur!: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input has focus.
   */
  @Event() myFocus!: EventEmitter<FocusEvent>;

  /**
   * The `myChange` event is fired when the user modifies the textarea's value.
   */
  @Event() myChange!: EventEmitter<TextareaChangeEventDetail>;

  /**
   * The `myInput` event is fired when the user modifies the textarea's value.
   */
  @Event() myInput!: EventEmitter<TextareaInputEventDetail>;

  private getValue(): string {
    return this.value || '';
  }

  private onFocus = (ev: FocusEvent) => {
    this.myFocus.emit(ev);
  };

  private onBlur = (ev: FocusEvent) => {
    this.myBlur.emit(ev);
  };

  private onChange = (ev: Event) => {
    this.emitValueChange(ev);
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLTextAreaElement | null;
    if (input) {
      this.value = input.value || '';
    }
    this.emitInputChange(ev);
  };

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
    this.myChange.emit({ value: newValue, event });
  }

  /**
   * Emits an `myInput` event.
   */
  private emitInputChange(event?: Event) {
    const { value } = this;
    this.myInput.emit({ value, event });
  }

  render() {
    const value = this.getValue();

    return (
      <Host>
        <textarea ref={el => (this.nativeInput = el)} onChange={this.onChange} onInput={this.onInput} onBlur={this.onBlur} onFocus={this.onFocus}>
          {value}
        </textarea>
      </Host>
    );
  }
}
