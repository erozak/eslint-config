module.exports = {
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      2,
      'always',
      ['new', 'update', 'fix', 'docs', 'chore', 'test', 'revert', 'ci'],
    ],
    'type-empty': [
      2,
      'never',
    ],
    'scope-enum': [
      2,
      'always',
      [
        'release',
        'common',
        'js',
        'ts',
      ],
    ],
    'scope-empty': [
      2,
      'never',
    ],
    'subject-case': [
      2,
      'always',
      'lower-case',
    ],
    'subject-max-length': [
      2,
      'always',
      72,
    ],
    'subject-min-length': [
      2,
      'always',
      4,
    ],
  },
  prompt: {
    messages: {
      skip: '(skip)',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          new: {
            description: 'A new configuration',
            title: 'New Configuration',
            emoji: '✨',
          },
          update: {
            description: 'An update of a configuration',
            title: 'Configuration Update',
            emoji: '📦',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description:
          'What is the scope of this change',
        enum: {
          js: {
            description: 'Changes for javascript configuration',
          },
          ts: {
            description: 'Changes for typescript configuration',
          },
          common: {
            description: 'Changes for other files',
          },
          release: {
            description: 'Release stuffs',
          },
        },
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
    },
  },
};
