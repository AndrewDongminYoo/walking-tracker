const path = require('path');
const root = path.resolve(__dirname, '..');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 * @type {import('metro-config').loadConfig}
 */
module.exports = {
  projectRoot: __dirname,
  watchFolders: [root],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
