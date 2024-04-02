import { NgModule } from '@angular/core';
import { MyComponent } from './stencil-generated/components';

@NgModule({
  declarations: [MyComponent],
  imports: [],
  exports: [MyComponent],
})
export class ComponentLibraryModule {}
