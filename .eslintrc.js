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
  },
  env: {
    node: true,
  },
};
