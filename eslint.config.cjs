const reactNativeConfig = require('@react-native/eslint-config/flat');
const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');

// Compatibility patches applied to @react-native/eslint-config/flat.
//
// For ESLint 9:
//
// 1. eslint-plugin-eslint-comments v3 uses context.getSourceCode() (removed in ESLint 9).
//    Replace with @eslint-community/eslint-plugin-eslint-comments (ESLint 9/10 compatible).
//    Rule namespace changes: 'eslint-comments/*' → '@eslint-community/eslint-comments/*'.
//
// 2. eslint-plugin-ft-flow uses context.getAllComments() (removed in ESLint 9).
//    This project uses TypeScript, so Flow type checking is not needed.
//    Drop the ft-flow config block entirely.
//
// For ESLint 10:
//
// 3. eslint-plugin-react's detectReactVersion() calls context.getFilename(), removed in
//    ESLint 10. Pinning settings.react.version skips auto-detection, keeping all 33
//    react/* rules working.
//
// 4. eslint-plugin-react-native@5.0.0 (latest; unmaintained since 2024-12, peer caps at
//    eslint ^9) loads 'no-inline-styles' via context.getSourceCode(), also removed in
//    ESLint 10. That is the only react-native/* rule this config enables, so it is turned
//    off rather than dropping the plugin. Re-enable if the plugin ever ships ESLint 10
//    support.

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
  })
  .concat([
    {
      settings: { react: { version: '19.2' } },
      rules: { 'react-native/no-inline-styles': 'off' },
    },
  ]);
