const path = require('path');
const assert = require('assert');
const eslint = require('eslint');

const joinPath = pathname => path.join(__dirname, pathname);

const testFiles = [
  './test.js',
  '../js-config.js',
].map(joinPath);


const jsLinter = new eslint.ESLint({
  useEslintrc: false,
  overrideConfig: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      node: true,
    },
  },
  overrideConfigFile: joinPath('../js-config.js'),
});

[['js-config', jsLinter]]
  .forEach(
    ([name, linter]) => linter
      .lintFiles(testFiles)
      .then(assertsResults(name)),
  );

function assertsResults(name) {
  return results => {
    results
      .forEach(
        result => {
          assert.equal(result.errorCount, 0, `found some lint errors with ${name}!`);
          assert.equal(result.warningCount, 0, `found some lint warnings with ${name}!`);
        },
      );
  };
}
