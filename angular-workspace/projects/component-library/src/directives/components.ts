/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'stencil-library';


@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'mode', 'value']
})
@Component({
  selector: 'my-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'mode', 'value'],
})
export class MyCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange', 'myFocus', 'myBlur']);
  }
}


import type { CheckboxChangeEventDetail as IMyCheckboxCheckboxChangeEventDetail } from 'stencil-library';

export declare interface MyCheckbox extends Components.MyCheckbox {
  /**
   * Emitted when the checked property has changed
as a result of a user action such as a click.
This event will not emit when programmatically
setting the checked property.
   */
  myChange: EventEmitter<CustomEvent<IMyCheckboxCheckboxChangeEventDetail>>;
  /**
   * Emitted when the checkbox has focus.
   */
  myFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus.
   */
  myBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}


@ProxyCmp({
  inputs: ['disabled', 'required', 'type', 'value']
})
@Component({
  selector: 'my-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'required', 'type', 'value'],
})
export class MyInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myInput', 'myChange', 'myBlur', 'myFocus']);
  }
}


import type { InputInputEventDetail as IMyInputInputInputEventDetail } from 'stencil-library';
import type { InputChangeEventDetail as IMyInputInputChangeEventDetail } from 'stencil-library';

export declare interface MyInput extends Components.MyInput {
  /**
   * The `myInput` event is fired each time the user modifies the input's value.
Unlike the `myChange` event, the `myInput` event is fired for each alteration
to the input's value. This typically happens for each keystroke as the user types.

For elements that accept text input (`type=text`, `type=tel`, etc.), the interface
is [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others,
the interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If
the input is cleared on edit, the type is `null`.
   */
  myInput: EventEmitter<CustomEvent<IMyInputInputInputEventDetail>>;
  /**
   * The `myChange` event is fired when the user modifies the input's value.
Unlike the `myInput` event, the `myChange` event is only fired when changes
are committed, not as the user types.

Depending on the way the users interacts with the element, the `myChange`
event fires at a different moment:
- When the user commits the change explicitly (e.g. by selecting a date
from a date picker for `<my-input type="date">`, pressing the "Enter" key, etc.).
- When the element loses focus after its value has changed: for elements
where the user's interaction is typing.
   */
  myChange: EventEmitter<CustomEvent<IMyInputInputChangeEventDetail>>;
  /**
   * Emitted when the input loses focus.
   */
  myBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  myFocus: EventEmitter<CustomEvent<FocusEvent>>;
}


@ProxyCmp({
  inputs: ['value']
})
@Component({
  selector: 'my-text-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['value'],
})
export class MyTextArea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myBlur', 'myFocus', 'myChange', 'myInput']);
  }
}


import type { TextareaChangeEventDetail as IMyTextAreaTextareaChangeEventDetail } from 'stencil-library';
import type { TextareaInputEventDetail as IMyTextAreaTextareaInputEventDetail } from 'stencil-library';

export declare interface MyTextArea extends Components.MyTextArea {
  /**
   * Emitted when the input loses focus.
   */
  myBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  myFocus: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * The `myChange` event is fired when the user modifies the textarea's value.
   */
  myChange: EventEmitter<CustomEvent<IMyTextAreaTextareaChangeEventDetail>>;
  /**
   * The `myInput` event is fired when the user modifies the textarea's value.
   */
  myInput: EventEmitter<CustomEvent<IMyTextAreaTextareaInputEventDetail>>;
}


