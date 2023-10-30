/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 'off',
    'react-native/no-inline-styles': 'off',
  },
  ignorePatterns: ['!.prettierrc.js'],
};
