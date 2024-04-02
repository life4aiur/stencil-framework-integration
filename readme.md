# Integration Stencil to Angular

## First setup

1. To start this repo first open `stencil-library` and make sure to install all the dependencies, and build the library.

```console
cd stencil-library
npm install
npm run build
```

2. Then, if you are working locally you will need to link the build output with npm.

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

4. Run the dev server to test if the pipeline is working fine.

```console
npm start
```
