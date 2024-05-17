import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'stencil-library/loader';
import { DIRECTIVES } from './directives';
import {
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  TextValueAccessorDirective,
} from './directives/control-value-accessors';
import { FaceValidationDirective } from './directives/validation/face-validation.directive';

const DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,

  // value accessors
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  TextValueAccessorDirective,
  FaceValidationDirective,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
})
export class ComponentLibraryModule {}
