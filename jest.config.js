process.env.TZ = 'UTC';
module.exports = {
  preset: '@rnx-kit/jest-preset',
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/lib/'],
};
