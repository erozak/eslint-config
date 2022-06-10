'use-strict';

module.exports = {
  extends: [
    './rules/typescript/base',
  ].map(require.resolve),
  plugins: [
    'import',
  ],
};
