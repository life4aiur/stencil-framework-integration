/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'stencil-library';


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


