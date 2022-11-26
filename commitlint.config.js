module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'root',
        'mixed',
        'js',
        'ts',
      ],
    ],
  },
};
