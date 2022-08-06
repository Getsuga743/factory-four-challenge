/* eslint-disable no-undef */
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/**/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
