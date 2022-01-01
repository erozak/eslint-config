'use strict';

// This is the internal ESLint config for this project itself.

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['./js-config.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          kebabCase: true,
        },
      },
    ],
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['./ts-config.js'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    },
  ],
};
