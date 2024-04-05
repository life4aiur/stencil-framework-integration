import type { EventEmitter } from '@stencil/core';
import { Component, Element, Event, Host, Prop, h } from '@stencil/core';
import type { CheckboxChangeEventDetail } from './checkbox-interface';

/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - The label text to associate with the checkbox. Use the "labelPlacement" property to control where the label is placed relative to the checkbox.
 *
 * @part container - The container for the checkbox mark.
 * @part label - The label text describing the checkbox.
 * @part mark - The checkmark used to indicate the checked state.
 */
@Component({
  tag: 'my-checkbox',
  styleUrl: 'my-checkbox.css',
  shadow: true,
})
export class MyCheckbox {
  @Element() el!: HTMLMyCheckboxElement;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true }) checked = false;

  /**
   * If `true`, the checkbox will visually appear as indeterminate.
   */
  @Prop({ mutable: true }) indeterminate = false;

  /**
   * If `true`, the user cannot interact with the checkbox.
   */
  @Prop() disabled = false;

  /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  @Prop() value: any | null = 'on';

  /**
   * Emitted when the checked property has changed
   * as a result of a user action such as a click.
   * This event will not emit when programmatically
   * setting the checked property.
   */
  @Event() myChange!: EventEmitter<CheckboxChangeEventDetail>;

  /**
   * Emitted when the checkbox has focus.
   */
  @Event() myFocus!: EventEmitter<void>;

  /**
   * Emitted when the checkbox loses focus.
   */
  @Event() myBlur!: EventEmitter<void>;

  /**
   * Sets the checked property and emits
   * the myChange event. Use this to update the
   * checked state in response to user-generated
   * actions such as a click.
   */
  private setChecked = (state: boolean) => {
    const isChecked = (this.checked = state);
    this.myChange.emit({
      checked: isChecked,
      value: this.value,
    });
  };

  private toggleChecked = (ev: Event) => {
    ev.preventDefault();
    this.setChecked(!this.checked);
    this.indeterminate = false;
  };

  private onFocus = () => {
    this.myFocus.emit();
  };

  private onBlur = () => {
    this.myBlur.emit();
  };

  private onClick = (ev: MouseEvent) => {
    if (this.disabled) {
      return;
    }

    this.toggleChecked(ev);
  };

  render() {
    return this.renderCheckbox();
  }

  private renderCheckbox() {
    const { checked, disabled, indeterminate } = this;

    return (
      <Host onClick={this.onClick}>
        <input
          type="checkbox"
          indeterminate={indeterminate}
          checked={checked ? true : undefined}
          disabled={disabled}
          onChange={this.toggleChecked}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
        />
      </Host>
    );
  }
}
