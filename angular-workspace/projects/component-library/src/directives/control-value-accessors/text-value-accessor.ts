import { Directive, ElementRef, HostListener, Injector } from '@angular/core';
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

  // @HostListener('invalid', ['$event'])
  // _handleInvalidEvent(el: HTMLMyInputElement | HTMLMyTextAreaElement): void {
  //   const internals = (el as any)['s-ei'] as ElementInternals;
  //   const validity = internals.validity;

  //   // TODO: is this property auto-generated, is there a better way to reach into the internals?
  //   console.log(validity);
  // }
}
