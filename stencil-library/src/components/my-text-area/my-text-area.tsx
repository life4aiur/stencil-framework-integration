import { Component, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { TextareaChangeEventDetail } from './textarea-interface';

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
   * The `myChange` event is fired when the user modifies the textarea's value.
   */
  @Event() myChange!: EventEmitter<TextareaChangeEventDetail>;

  private getValue(): string {
    return this.value || '';
  }

  private onChange = (ev: Event) => {
    this.emitValueChange(ev);
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLTextAreaElement | null;
    if (input) {
      this.value = input.value || '';
    }
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

  render() {
    const value = this.getValue();

    return (
      <Host>
        <textarea ref={el => (this.nativeInput = el)} onChange={this.onChange} onInput={this.onInput}>
          {value}
        </textarea>
      </Host>
    );
  }
}
