import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const tsEslintConfig = tseslint.configs.recommended.rules;
const jsEslintConfig = pluginJs.configs.recommended.rules;

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...jsEslintConfig,
      ...tsEslintConfig,

      // Best practices for Node.js + TypeScript
      'no-console': 'off',
      'no-process-exit': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-return-await': 'error',
      'no-implicit-coercion': 'error',
      'consistent-return': 'error',
      'curly': 'error',

      // Style rules
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
      'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
      'space-before-function-paren': ['error', 'never'],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'func-call-spacing': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],

      // TypeScript-specific rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',

      // Rules that are odd for Node.js
      'import/no-extraneous-dependencies': 'off',
      'no-param-reassign': 'off',
      'no-underscore-dangle': 'off',
    },
  },
];
