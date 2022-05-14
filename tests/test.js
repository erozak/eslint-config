const path = require('path');
const assert = require('assert');
const eslint = require('eslint');

const joinPath = pathname => path.join(__dirname, pathname);

const jsLinter = new eslint.ESLint({
  useEslintrc: false,
  overrideConfig: {
    extends: [joinPath('../js-config.js')],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      node: true,
    },
  },
});

const tsLinter = new eslint.ESLint({
  useEslintrc: false,
  overrideConfig: {
    extends: [joinPath('../js-config.js')],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: [joinPath('../tsconfig.json')],
    },
    overrides: [
      {
        files: ['*.ts'],
        extends: [joinPath('../ts-config.js')],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
      },
    ],
    env: {
      node: true,
    },
  },
});

/**
 * @type {[name: string, linter: import('eslint').ESLint, cases: string[]][]}
 */
const tuples = [
  ['js-config', jsLinter, ['./test.js']],
  ['ts-config', tsLinter, ['./cases/typescript.ts']],
];

for (const [name, linter, testFiles] of tuples) {
  linter
    .lintFiles(testFiles.map(joinPath))
    .then(assertsResults(name))
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(`Caught some errors while linting:\n${error}`);
    });
}

/**
 * @param {string} name
 */
function assertsResults(name) {
  /**
   * @param {import('eslint').ESLint.LintResult[]} results
   * @returns {void}
   */
  return results => {
    for (const result of results) {
      assert.equal(result.errorCount, 0, `found some lint errors\nwith: ${name}\nin: ${result.filePath}\n${
        result.messages
          .map(showMessage)
          .join('\n')
      }`);

      assert.equal(result.warningCount, 0, `found some lint warnings with ${name}!`);
    }
  };
}

/**
 * @param {import('eslint').Linter.LintMessage} message
 * @returns {string}
 */
function showMessage(message) {
  if (message.line == null) return message.message;

  return `[${message.ruleId || '-'}] L${message.line}: ${message.message}`;
}
