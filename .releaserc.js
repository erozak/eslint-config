const preset = 'conventionalcommits';

module.exports = {
  branches: [
    { name: "main" },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset,
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset,
      }
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: [
          "package.json",
          "CHANGELOG.md"
        ],
        message: "chore(release): set package.json to ${nextRelease.version}\n\n${nextRelease.notes}"
      }
    ]
  ]
}
