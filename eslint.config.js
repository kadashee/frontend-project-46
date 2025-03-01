import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        jest: true,
      },
    },
  },
  {
    plugins: ["jest"],
    extends: ["plugin:jest/recommended"],
  },
  pluginJs.configs.recommended,
];