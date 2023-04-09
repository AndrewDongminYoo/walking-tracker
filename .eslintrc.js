module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    '@react-native-community',
    'plugin:jsdoc/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/sort-styles': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
  },
  ignorePatterns: ['**/node_modules/', '**/lib/'],
  env: {
    'jest/globals': true,
    jest: true,
    commonjs: true,
    node: true,
  },
};
