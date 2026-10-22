process.env.TZ = 'UTC';
const jestConfig = require('jest-config');
module.exports = {
  preset: '@react-native/jest-preset',
  // Use Node crawling because Watchman cannot access this checkout's volume.
  watchman: false,
  // other Jest configuration options...
  moduleFileExtensions: [...jestConfig.defaults.moduleFileExtensions, 'mts'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/lib/'],
  moduleNameMapper: {
    // Force example/src files to use the root copy of React.
    '^react$': '<rootDir>/node_modules/react',
    '^react/(.*)': '<rootDir>/node_modules/react/$1',
    // Mock native packages from example/node_modules
    '^react-native-svg$': '<rootDir>/__mocks__/react-native-svg.tsx',
    '^react-native-safe-area-context$':
      '<rootDir>/__mocks__/react-native-safe-area-context.tsx',
    '^react-native-permissions$':
      '<rootDir>/__mocks__/react-native-permissions.ts',
    '^react-native-circular-progress-indicator$':
      '<rootDir>/__mocks__/react-native-circular-progress-indicator.tsx',
  },
};
