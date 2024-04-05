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
import type {
  Components,
  InputChangeEventDetail,
  InputInputEventDetail,
} from 'stencil-library';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import { defineCustomElement } from 'stencil-library/components/my-input';
import { ValueAccessor } from 'projects/component-library/src/directives/control-value-accessors';

const INPUT_INPUTS = ['disabled', 'required', 'type', 'value'];

const accessorProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: /*@__PURE__*/ forwardRef(() => MyInput),
  multi: true,
};

@ProxyCmp({
  defineCustomElementFn: defineCustomElement,
  inputs: INPUT_INPUTS,
  methods: ['setFocus', 'getInputElement'],
})
@Component({
  selector: 'my-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: INPUT_INPUTS,
  providers: [accessorProvider],
  standalone: true,
})
export class MyInput extends ValueAccessor {
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
    proxyOutputs(this, this.el, ['myInput', 'myChange', 'myBlur', 'myFocus']);
  }

  @HostListener('myInput', ['$event.target'])
  handleMyInput(el: HTMLMyInputElement): void {
    this.handleValueChange(el, el.value);
  }

  override registerOnChange(fn: (_: any) => void): void {
    super.registerOnChange((value: string) => {
      if (this.type === 'number') {
        /**
         * If the input type is `number`, we need to convert the value to a number
         * when the value is not empty. If the value is empty, we want to treat
         * the value as null.
         */
        fn(value === '' ? null : parseFloat(value));
      } else {
        fn(value);
      }
    });
  }
}

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
  myInput: EventEmitter<CustomEvent<InputInputEventDetail>>;
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
  myChange: EventEmitter<CustomEvent<InputChangeEventDetail>>;
  /**
   * Emitted when the input loses focus.
   */
  myBlur: EventEmitter<CustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus.
   */
  myFocus: EventEmitter<CustomEvent<FocusEvent>>;
}
