import playwright from 'eslint-plugin-playwright';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      playwright,
    },
    rules: {
      ...playwright.configs['recommended'].rules,
    },
  },
];