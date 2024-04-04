import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyComponent } from 'projects/component-library/standalone/src/directives/components';
import { MyTextArea } from 'projects/component-library/standalone/src/directives/my-text-area';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MyTextArea,
    MyComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
