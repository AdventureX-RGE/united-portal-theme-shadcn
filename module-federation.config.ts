import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'provider',
  filename: 'static/remoteEntry.js',
  manifest: {
    filePath: 'static',
  },
  exposes: {
    './TextField': './src/components/textfield.tsx',
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: '^18.0.0',
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '^18.0.0',
    },
  },
});
