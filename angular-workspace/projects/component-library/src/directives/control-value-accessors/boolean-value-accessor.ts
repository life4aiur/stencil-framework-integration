import { Directive, HostListener, ElementRef, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'my-checkbox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BooleanValueAccessorDirective,
      multi: true,
    },
  ],
})
export class BooleanValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  override writeValue(value: boolean): void {
    this.elementRef.nativeElement.checked = this.lastValue = value;
  }

  @HostListener('myChange', ['$event.target'])
  _handleMyChange(el: HTMLMyCheckboxElement): void {
    this.handleValueChange(el, el.checked);
  }
}
