module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'mjs', 'ts', 'tsx'],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/imageStub.ts',
    '\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts',
  },
  resolver: undefined,
  setupFilesAfterEnv: [
    './setupTests.ts',
    'jest-extended',
    'jest-image-snapshot',
  ],
};
