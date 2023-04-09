/** @type {import('@react-native-community/cli-types').Config} */
module.exports = {
  projectRoot: __dirname,
  project: {
    ios: {
      sourceDir: './ios',
    },
    android: {
      sourceDir: './android',
      appName: 'app',
      packageName: 'com.walking_tracker',
    },
  },
};
