import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: [
      'node_modules/',
      '**/dist/',
      '**/build/',
      '**/public/',
      '.husky/',
      '.git/'
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsparser,
      globals: globals.es2021,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...prettierConfig.rules,
    },
  },
  // Backend overrides
  {
    files: ['apps/backend/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsparser,
      globals: { ...globals.es2021, ...globals.node },
    },
  },
  // Frontend overrides
  {
    files: ['apps/frontend/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parser: tsparser,
      globals: { ...globals.es2021, ...globals.browser },
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  // JS files without TS project
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        project: [],
      },
      globals: globals.es2021,
    },
  },
];
