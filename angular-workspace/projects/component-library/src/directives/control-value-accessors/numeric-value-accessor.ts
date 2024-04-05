import { Directive, HostListener, ElementRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'my-input[type=number]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericValueAccessorDirective,
      multi: true,
    },
  ],
})
export class NumericValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('myInput', ['$event.target'])
  handleInputEvent(el: HTMLMyInputElement): void {
    this.handleValueChange(el, el.value);
  }

  override registerOnChange(fn: (_: number | null) => void): void {
    super.registerOnChange((value: string) => {
      fn(value === '' ? null : parseFloat(value));
    });
  }
}
