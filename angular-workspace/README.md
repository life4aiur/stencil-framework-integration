# Introduction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

The project is composed of two sub-projects, `component-library` and `angular-app`.

The `component-library` project contains an Angular library which provides Angular component wrappers for the web components generated in the `stencil-library`. These wrappers were created following the [guidance provided by Stencil](https://stenciljs.com/docs/angular). These include stencil-generated wrappers found in the `src/directives` directory as well as [standalone](https://stenciljs.com/docs/angular#angular-with-standalone-components) components found in the `standalone/src/directives` directory. In order for Angular bindings to work correctly with the web components, several [value accessors](https://angular.io/api/forms/ControlValueAccessor) are also included in this project.

The `angular-app` project contains a basic Angular app that serves as a sandbox to test out the wrappers built by the `component-library` project. The `app.module.ts` of this project is configured to import the `component-library.module` from the `component-library` project. This module will define all the custom elements as well as import all the value accessors needed for the web components to bind values correctly. No additional configuration is needed. To use standalone components, rather than the module, add the standalone components as imports in the `app.module.ts`.

## Build

Run `npm run build.library` to build the `component-library` project. The build artifacts will be stored in the `dist/` directory.

## Run

Run `npm start` to start a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
