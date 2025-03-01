import globals from 'globals';
import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals,
      },
    },
  },
];