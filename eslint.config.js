const reactNativeConfig = require('@react-native/eslint-config/flat');
const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');

// eslint-plugin-eslint-comments (v3) uses context.getSourceCode() which was removed in ESLint 10.
// Replace it with the community fork (@eslint-community/eslint-plugin-eslint-comments) which is
// ESLint 9/10 compatible. Rule names change from 'eslint-comments/*' to
// '@eslint-community/eslint-comments/*'.
module.exports = reactNativeConfig.map(config => {
  if (!config.plugins?.['eslint-comments']) {
    return config;
  }

  const { 'eslint-comments': _old, ...otherPlugins } = config.plugins;

  const fixedRules = Object.fromEntries(
    Object.entries(config.rules ?? {}).map(([key, value]) => [
      key.startsWith('eslint-comments/')
        ? key.replace('eslint-comments/', '@eslint-community/eslint-comments/')
        : key,
      value,
    ]),
  );

  return {
    ...config,
    plugins: {
      ...otherPlugins,
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
    },
    rules: fixedRules,
  };
});
