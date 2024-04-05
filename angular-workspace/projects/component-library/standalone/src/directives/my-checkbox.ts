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
import type { CheckboxChangeEventDetail, Components } from 'stencil-library';
import { defineCustomElement } from 'stencil-library/components/my-checkbox';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import { ValueAccessor } from 'projects/component-library/src/directives/control-value-accessors';

const CHECKBOX_INPUTS = ['checked', 'disabled', 'indeterminate', 'value'];

const accessorProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: /*@__PURE__*/ forwardRef(() => MyCheckbox),
  multi: true,
};

@ProxyCmp({
  defineCustomElementFn: defineCustomElement,
  inputs: CHECKBOX_INPUTS,
})
@Component({
  selector: 'my-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: CHECKBOX_INPUTS,
  providers: [accessorProvider],
  standalone: true,
})
export class MyCheckbox extends ValueAccessor {
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
    proxyOutputs(this, this.el, ['myChange', 'myFocus', 'myBlur']);
  }

  override writeValue(value: boolean): void {
    this.elementRef.nativeElement.checked = this.lastValue = value;
  }

  @HostListener('myChange', ['$event.target'])
  handleMyChange(el: HTMLMyCheckboxElement): void {
    this.handleValueChange(el, el.checked);
  }
}

export declare interface MyCheckbox extends Components.MyCheckbox {
  /**
   * Emitted when the checked property has changed
as a result of a user action such as a click.
This event will not emit when programmatically
setting the checked property.
   */
  myChange: EventEmitter<CustomEvent<CheckboxChangeEventDetail>>;
  /**
   * Emitted when the checkbox has focus.
   */
  myFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus.
   */
  myBlur: EventEmitter<CustomEvent<void>>;
}
