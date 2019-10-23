const tsPaths = require('tsconfig-paths-jest')(require('../../tsconfig.json'));

module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'jest-junit'],
  setupFilesAfterEnv: ['<rootDir>tests/enzyme.ts'],
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
