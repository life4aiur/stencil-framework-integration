import { ElementRef, Injector, Directive, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';

@Directive({
  selector: 'my-input:not([type=number]),my-text-area',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessorDirective,
      multi: true,
    },
  ],
})
export class TextValueAccessorDirective extends ValueAccessor {
  constructor(injector: Injector, el: ElementRef) {
    super(injector, el);
  }

  @HostListener('myInput', ['$event.target'])
  _handleInputEvent(el: HTMLMyInputElement | HTMLMyTextAreaElement): void {
    this.handleValueChange(el, el.value);
  }
}
