import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

export default [
  eslintPluginPrettierRecommended,
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["node_modules", "dist"],
    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-unused-expressions": "error",

    }

  },
];