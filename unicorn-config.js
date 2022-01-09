'use-strict';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  plugins: ['unicorn'],
  rules: {
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'error',
        ignore: [],
      },
    ],
    'unicorn/consistent-destructuring': 'error',
    // 'unicorn/consistent-function-scoping': 'off',
    // 'unicorn/custom-error-definition': 'off',
    'unicorn/empty-brace-spaces': 'error',
    // 'unicorn/error-message': 'off'
    'unicorn/escape-case': 'error',
    // 'unicorn/expiring-todo-comments': 'off',
    // 'unicorn/explicit-length-check': 'off',
    // 'unicorn/filename-case': [
    //   'error',
    //   {
    //     cases: {
    //       camelCase: true,
    //       pascalCase: true,
    //     },
    //   },
    // ],
    'unicorn/import-index': 'off',
    'unicorn/import-style': [
      'error',
      {
        styles: {
          util: false,
          path: {
            unassigned: false,
            default: false,
            namespace: true,
            named: true,
          },
        },
      },
    ],
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    // 'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    // 'unicorn/no-array-push-push': 'off'
    // 'unicorn/no-array-reduce': 'off'
    'unicorn/no-await-expression-member': 'error',
    // 'unicorn/no-console-spaces': 'off',
    // 'unicorn/no-document-cookie': 'off',
    // 'unicorn/no-empty-file': 'off',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    // 'unicorn/no-invalid-remove-event-listener': 'off',
    // 'unicorn/no-keyword-prefix': 'off',
    // 'unicorn/no-lonely-if': 'off'
    // 'unicorn/no-nested-ternary': 'off',
    // 'unicorn/no-new-array': 'off',
    'unicorn/no-new-buffer': 'error',
    // 'unicorn/no-null': 'off',
    'unicorn/no-object-as-default-parameter': 'error',
    // 'unicorn/no-process-exit': 'off',
    // 'unicorn/no-static-only-class': 'off',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'error',
    // 'nunicorn/o-unused-properties': 'off',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-undefined': 'error',
    // 'unicorn/no-thenable': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': [
      'error',
      {
        onlyIfContainsSeparator: false,
        hexadecimal: {
          minimumDigits: 0,
          groupLength: 2,
        },
        binary: {
          minimumDigits: 0,
          groupLength: 4,
        },
        octal: {
          minimumDigits: 0,
          groupLength: 4,
        },
        number: {
          minimumDigits: 5,
          groupLength: 3,
        },
      },
    ],
    // 'unicorn/prefer-add-event-listener': 'off',
    // 'unicorn/prefer-array-find': 'off',
    // 'unicorn/prefer-array-flat': 'off',
    // 'unicorn/prefer-array-flat-map': 'off',
    // 'unicorn/prefer-array-index-of': 'off',
    // 'unicorn/prefer-array-some': 'off',
    // 'unicorn/prefer-at': 'off',
    // 'unicorn/prefer-code-point': 'error',
    // 'unicorn/prefer-date-now': 'off',
    // 'unicorn/prefer-default-parameters': 'off',
    // 'unicorn/prefer-dom-node-append': 'off',
    // 'unicorn/prefer-dom-node-dataset': 'off',
    // 'unicorn/prefer-dom-node-remove': 'off',
    // 'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-export-from': [
      'error',
      {
        ignoreUsedVariables: true,
      },
    ],
    // 'unicorn/prefer-includes': 'off',
    'unicorn/prefer-json-parse-buffer': 'error',

    /**
     * NOTE: with 'DOM'
     */
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    // 'unicorn/prefer-module': 'off',
    // 'unicorn/prefer-negative-index': 'off',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': [
      'error',
      {
        checkInfinity: false,
      },
    ],
    // 'unicorn/prefer-object-from-entries': 'off',
    'unicorn/prefer-object-has-own': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    // 'unicorn/prefer-prototype-methods': 'off',
    /**
     * NOTE: with 'DOM'
     */
    // 'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-reflect-apply': 'error',
    // 'unicorn/prefer-regexp-test': 'off',
    // 'unicorn/prefer-set-has': 'off',
    'unicorn/prefer-spread': 'error',
    // 'unicorn/prefer-string-replace-all': 'off',
    // 'unicorn/prefer-string-slice': 'off',
    // 'unicorn/prefer-string-starts-ends-with': 'off',
    'unicorn/prefer-string-trim-start-end': 'error',
    // 'unicorn/prefer-switch': 'off',
    // 'unicorn/prefer-ternary': 'off',
    // 'unicorn/prefer-top-level-await': 'off',
    // 'unicorn/prefer-type-error': 'off',
    // 'unicorn/prevent-abbreviations': 'off',
    'unicorn/relative-url-style': ['error', 'never'],
    // 'unicorn/require-array-join-separator': 'off',
    'unicorn/require-number-to-fixed-digits-argument': 'error',

    /**
     * NOTE: with 'DOM'
     */
    // 'unicorn/require-post-message-target-origin': 'off',
    // 'unicorn/string-content': 'off',
    'unicorn/template-indent': [
      'warn',
      {
        tags: [
          'outdent',
          'dedent',
          'gql',
          'sql',
          'html',
          'styled',
        ],
        functions: [
          'dedent',
          'stripIndent',
        ],
        selectors: [],
        comments: [
          'HTML',
          'indent',
        ],
      },
    ],
    'unicorn/throw-new-error': 'error',
  },
};

module.exports = config;
