module.exports = {
  bracketSpacing: false,
  printWidth: 100,
  proseWrap: 'always',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.md'],
      options: {
        printWidth: 80,
        tabWidth: 4,
      },
    },
  ],
}
