import {
  AfterViewInit,
  ElementRef,
  Injector,
  OnDestroy,
  Directive,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

/**
 * Copied from Ionic's common value-accessor
 */
@Directive()
export class ValueAccessor implements ControlValueAccessor, AfterViewInit {
  private onChange: (value: any) => void = () => {
    /**/
  };
  private onTouched: () => void = () => {
    /**/
  };
  protected lastValue: any;

  constructor(protected injector: Injector, protected elementRef: ElementRef) {}

  writeValue(value: any): void {
    this.elementRef.nativeElement.value = this.lastValue = value;
  }

  /**
   * Notifies the ControlValueAccessor of a change in the value of the control.
   *
   * This is called by each of the ValueAccessor directives when we want to update
   * the status and validity of the form control. For example with text components this
   * is called when the myInput event is fired. For select components this is called
   * when the myChange event is fired.
   *
   * @param el The component element.
   * @param value The new value of the control.
   */
  handleValueChange(el: HTMLElement, value: any): void {
    if (el === this.elementRef.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
    }
  }

  @HostListener('myBlur', ['$event.target'])
  _handleBlurEvent(el: any): void {
    if (el === this.elementRef.nativeElement) {
      this.onTouched();
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.elementRef.nativeElement.disabled = isDisabled;
  }

  ngAfterViewInit(): void {
    let ngControl;
    try {
      ngControl = this.injector.get<NgControl>(NgControl);
    } catch {
      /* No FormControl or ngModel binding */
    }

    if (!ngControl) {
      return;
    }

    /**
     * TODO FW-2787: Remove this in favor of https://github.com/angular/angular/issues/10887
     * whenever it is implemented.
     */
    const formControl = ngControl.control as any;
    if (formControl) {
      const methodsToPatch = [
        'markAsTouched',
        'markAllAsTouched',
        'markAsUntouched',
        'markAsDirty',
        'markAsPristine',
      ];
      methodsToPatch.forEach((method) => {
        if (typeof formControl[method] !== 'undefined') {
          const oldFn = formControl[method].bind(formControl);
          formControl[method] = (...params: any[]) => {
            oldFn(...params);
          };
        }
      });
    }
  }
}
