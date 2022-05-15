const conventionalChangelog = require('./scripts/conventional-changelog');

module.exports = {
  "debug": true,
  "branches": [
    "main"
  ],
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "releaseRules": [
          {
            "release": "major",
            "type": "new"
          },
          {
            "release": "minor",
            "type": "update"
          },
          {
            "release": "patch",
            "type": "fix"
          }
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        "parserOpts": conventionalChangelog.parserOpts,
        "writerOpts": conventionalChangelog.writerOpts
      }
    ],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        "assets": [
          "package.json",
          "CHANGELOG.md"
        ],
        "message": "chore(release): set package.json to ${nextRelease.version}\n\n${nextRelease.notes}"
      }
    ]
  ]
}
