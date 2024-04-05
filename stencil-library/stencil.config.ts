import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

const componentCorePackage = 'stencil-library';

const getAngularOutputTargets = () => {
  const excludeComponents = [];

  return [
    angularOutputTarget({
      componentCorePackage,
      directivesProxyFile: '../angular-workspace/projects/component-library/src/directives/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/directives/index.ts',
      excludeComponents,
      outputType: 'component',
    }),
    angularOutputTarget({
      componentCorePackage,
      directivesProxyFile: '../angular-workspace/projects/component-library/standalone/src/directives/components.ts',
      excludeComponents: [
        ...excludeComponents,
        /**
         * Value Accessors are manually implemented in the `standalone` package.
         */
        'my-checkbox',
        'my-input',
        'my-text-area',
      ],
      outputType: 'standalone',
    }),
  ];
};

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      customElementsExportBehavior: 'single-export-module',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    ...getAngularOutputTargets(),
  ],
};
