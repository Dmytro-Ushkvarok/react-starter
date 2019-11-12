const tsPaths = require('tsconfig-paths-jest')(require('../../tsconfig.json'));

module.exports = {
  rootDir: '../..',
  preset: 'ts-jest',
  collectCoverage: true,
  coverageReporters: ['html', 'lcov'],
  setupFilesAfterEnv: ['<rootDir>/tests/config/enzyme.js'],
  globals: {
    'ts-jest': {
      diagnostics: {
        warnOnly: true
      }
    }
  },
  testPathIgnorePatterns: [
    '<rootDir>/webpack/',
    '<rootDir>/env/',
    '<rootDir>/tests/'
  ],
  moduleNameMapper: {
    ...tsPaths,
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  }
};
