import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        jest: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];