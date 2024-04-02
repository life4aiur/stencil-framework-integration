# Introduction

This repository serves as a comprehensive guide and demonstration of how to integrate Stencil components into various frontend frameworks.

## About Stencil

[Stencil](https://stenciljs.com/docs/introduction) is a library for building standard-compliant web components with TypeScript, JSX, and modern tooling support. It provides developers with a powerful toolset to build web applications with reusable, encapsulated components.

## Purpose

The purpose of this repository is to showcase how StencilJS components can be seamlessly integrated into popular frontend frameworks such as Angular, React, and Vue.js. View the [Stencil documentation on framework integration](https://stenciljs.com/docs/overview) to learn more.

## Repository Structure

This repository is organized into separate directories for each framework integration:

- `angular-workspace`: Demonstrates how to integrate StencilJS components into Angular applications.
- `react-workspace` _(under-construction)_: Provides examples of integrating StencilJS components into React applications.
- `vue-workspace` _(under-construction)_: Offers guidance on integrating StencilJS components into Vue.js applications.

## Getting Started

> Note: Only Angular integrations are configured at this time, the instructions below will be updated as more framework support becomes available.

1. Open the `stencil-library` director and make sure to install all the dependencies, and build the library.

```console
cd stencil-library
npm install
npm run build
```

2. If you are working locally you will need to link the build output with npm.

```console
npm link
```

3. Go to `angular-workspace` and make sure to install the dependencies, link the library and build

```console
cd ../angular-workspace
npm install
npm link stencil-library
npm run build.library
```

4. Run the Angular app to test that the components are properly integrated.

```console
npm start
```
