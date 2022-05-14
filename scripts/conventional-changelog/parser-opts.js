/**
 * NOTE fork from [conventional-changelog-angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)
 */

module.exports = {
  headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
  headerCorrespondence: [
    'type',
    'scope',
    'subject',
  ],
  noteKeywords: ['BREAKING CHANGE'],
  revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
  revertCorrespondence: ['header', 'hash'],
};
