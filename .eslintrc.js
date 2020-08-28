module.exports = {
  extends: [`plugin:prettier/recommended`, `react-app`],
  globals: {
    __PATH_PREFIX__: true,
  },
  rules: {
    quotes: [`error`, `backtick`],
  },
}
