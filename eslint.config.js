import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginJest from 'eslint-plugin-jest';

export default [
  pluginJs.configs.recommended,
  eslintPluginJest.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    ...eslintPluginJest.configs.recommended,
  },
];