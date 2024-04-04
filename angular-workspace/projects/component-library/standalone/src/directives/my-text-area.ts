import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Injector,
  NgZone,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from '../../../src/directives/control-value-accessors';
import type {
  TextareaChangeEventDetail,
  TextareaInputEventDetail,
  Components,
} from 'stencil-library';
import { defineCustomElement } from 'stencil-library/components/my-text-area';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

const TEXTAREA_INPUTS = ['value'];

/**
 * Pulling the provider into an object and using PURE works
 * around an ng-packagr issue that causes
 * components with multiple decorators and
 * a provider to be re-assigned. This re-assignment
 * is not supported by Webpack and causes treeshaking
 * to not work on these kinds of components.
 */
const accessorProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: /*@__PURE__*/ forwardRef(() => MyTextArea),
  multi: true,
};

@ProxyCmp({
  defineCustomElementFn: defineCustomElement,
  inputs: TEXTAREA_INPUTS,
  methods: ['setFocus', 'getInputElement'],
})
@Component({
  selector: 'ion-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: TEXTAREA_INPUTS,
  providers: [accessorProvider],
  standalone: true,
})
export class MyTextArea extends ValueAccessor {
  protected el: HTMLElement;
  constructor(
    c: ChangeDetectorRef,
    r: ElementRef,
    protected z: NgZone,
    injector: Injector
  ) {
    super(injector, r);
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange', 'myInput', 'myBlur', 'myFocus']);
  }

  @HostListener('myInput', ['$event.target'])
  handleMyInput(el: HTMLMyTextAreaElement): void {
    this.handleValueChange(el, el.value);
  }
}

export declare interface MyTextArea extends Components.MyTextArea {
  /**
   * The `myChange` event is fired when the user modifies the textarea's value.
Unlike the `myInput` event, the `myChange` event is fired when
the element loses focus after its value has been modified.
   */
  myChange: EventEmitter<CustomEvent<TextareaChangeEventDetail>>;
  /**
   * The `myInput` event is fired each time the user modifies the textarea's value.
Unlike the `myChange` event, the `myInput` event is fired for each alteration
to the textarea's value. This typically happens for each keystroke as the user types.

When `clearOnEdit` is enabled, the `myInput` event will be fired when
the user clears the textarea by performing a keydown event.
   */
  myInput: EventEmitter<CustomEvent<TextareaInputEventDetail>>;
  /**
   * Emitted when the input loses focus.
   */
  myBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  myFocus: EventEmitter<CustomEvent<FocusEvent>>;
}
