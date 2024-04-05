import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Comment for standalone implementation
import { ComponentLibraryModule } from 'component-library';

// Uncomment for standalone implementation
// import { MyComponent } from 'projects/component-library/standalone/src/directives/components';
// import {
//   MyCheckbox,
//   MyInput,
//   MyTextArea,
// } from 'projects/component-library/standalone/src';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Comment for standalone implementation
    ComponentLibraryModule,

    // Uncomment for standalone implementation
    // MyCheckbox,
    // MyInput,
    // MyTextArea,
    // MyComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
