// This is the internal ESLint config for this project itself.

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    './js-config.js',
    './ts-config.js',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
