module.exports = {
  preset: 'jest-puppeteer',
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
  testMatch: ['**/tests/e2e/**/*.(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/webpack/',
    '<rootDir>/env/',
    '<rootDir>/tests/',
    '<rootDir>/src/'
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  }
};
