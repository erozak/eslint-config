module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'root',
        'js',
        'ts',
      ],
    ],
  },
  prompt: {
    settings: {
      enableMultipleScopes: true,
    },
  },
};
