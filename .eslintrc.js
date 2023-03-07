module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    '@react-native-community',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSameLine: true,
        bracketSpacing: true,
        tabWidth: 2,
        useTabs: false,
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
