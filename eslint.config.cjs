const reactNativeConfig = require('@react-native/eslint-config/flat');
const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');

// Two compatibility patches applied to @react-native/eslint-config/flat for ESLint 9:
//
// 1. eslint-plugin-eslint-comments v3 uses context.getSourceCode() (removed in ESLint 9).
//    Replace with @eslint-community/eslint-plugin-eslint-comments (ESLint 9/10 compatible).
//    Rule namespace changes: 'eslint-comments/*' → '@eslint-community/eslint-comments/*'.
//
// 2. eslint-plugin-ft-flow uses context.getAllComments() (removed in ESLint 9).
//    This project uses TypeScript, so Flow type checking is not needed.
//    Drop the ft-flow config block entirely.

module.exports = reactNativeConfig
  .filter(config => !config.plugins?.['ft-flow'])
  .map(config => {
    if (!config.plugins?.['eslint-comments']) {
      return config;
    }

    const { 'eslint-comments': _old, ...otherPlugins } = config.plugins;

    const fixedRules = Object.fromEntries(
      Object.entries(config.rules ?? {}).map(([key, value]) => [
        key.startsWith('eslint-comments/')
          ? key.replace(
              'eslint-comments/',
              '@eslint-community/eslint-comments/',
            )
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
