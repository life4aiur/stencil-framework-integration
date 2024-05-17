import {
  Directive,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Self,
} from '@angular/core';
import {
  AbstractControl,
  NgControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Directive({
  selector: 'my-input:not([type=number]),my-text-area',
})
export class FaceValidationDirective implements OnDestroy, OnInit {
  private currentValidationResult: ValidityState | null | undefined;
  private originalValidator: ValidatorFn | null | undefined;

  constructor(@Self() private ngControl: NgControl) {}

  private get hasControl(): boolean {
    return !!this.ngControl && !!this.ngControl.control;
  }

  /**
   * The invalid event is fired when the ElementInternals.reportValidity is invoked.
   * @param target The custom element.
   */
  @HostListener('invalid', ['$event.target'])
  _handleInvalidEvent(
    target: HTMLMyInputElement | HTMLMyTextAreaElement
  ): void {
    // TODO: Is this property auto-generated? Is there a better way to reach into the internals?
    const internals = (target as any)['s-ei'] as ElementInternals;
    const validity = internals.validity;
    console.log('Validity from ElementInternals', validity);

    if (
      JSON.stringify(this.currentValidationResult) !== JSON.stringify(validity)
    ) {
      this.currentValidationResult = validity;

      if (this.hasControl) {
        // emitEvent is set to false to avoid the valueChanges event being triggered.
        this.ngControl?.control?.updateValueAndValidity({ emitEvent: false });

        // Since emitEvent is false, we need to manually emit the statusChanges event.
        this.updateControlStatus(this.ngControl.control as AbstractControl);
      }
    }
  }

  ngOnInit(): void {
    if (this.hasControl) {
      this.originalValidator = this.ngControl?.control?.validator;
      const newValidator = Validators.compose([
        this.originalValidator,
        this.faceValidator,
      ]);
      this.ngControl?.control?.setValidators(newValidator);
    } else {
      this.originalValidator = null;
    }
  }

  ngOnDestroy(): void {
    this.currentValidationResult = null;

    if (this.hasControl) {
      this.ngControl?.control?.clearValidators();
      this.ngControl?.control?.setValidators(this.originalValidator ?? null);
    }
  }

  private readonly faceValidator: ValidatorFn = () => {
    const isValid =
      !this.currentValidationResult || this.currentValidationResult.valid;
    // returning null means that there are no errors.  Returning a value indicates there are errors
    return isValid ? null : { faceValidation: this.currentValidationResult };
  };

  /**
   * Effectively an alternate implementation of Angular's internal _updateControlsErrors method
   * https://github.com/angular/angular/blob/84a0fa3e8aac6279529f8d071f64aadb1f8c6765/packages/forms/src/model/abstract_model.ts#L1275
   *
   * @param control The control to update
   */
  private updateControlStatus(control: AbstractControl): void {
    // Since emitEvent is false, we need to manually emit the statusChanges event.
    (control.statusChanges as EventEmitter<string>).emit(control.status);

    if (control.parent) {
      this.updateControlStatus(control.parent);
    }
  }
}
