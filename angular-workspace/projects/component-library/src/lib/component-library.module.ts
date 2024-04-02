import { NgModule } from '@angular/core';
import { ComponentLibraryComponent } from './component-library.component';

import { MyComponent } from './stencil-generated/components';

@NgModule({
  declarations: [ComponentLibraryComponent, MyComponent],
  imports: [],
  exports: [ComponentLibraryComponent, MyComponent],
})
export class ComponentLibraryModule {}
