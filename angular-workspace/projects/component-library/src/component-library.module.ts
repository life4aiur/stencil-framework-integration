import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './directives';
import { defineCustomElements } from 'stencil-library/loader';
import {
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  TextValueAccessorDirective,
} from './directives/control-value-accessors';
import { CommonModule } from '@angular/common';

const DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,

  // value accessors
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  TextValueAccessorDirective,
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
