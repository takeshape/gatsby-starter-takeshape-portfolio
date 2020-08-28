module.exports = {
  bracketSpacing: false,
  printWidth: 100,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.md'],
      options: {
        printWidth: 80,
      },
    },
  ],
}
