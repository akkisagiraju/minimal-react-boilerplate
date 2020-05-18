module.exports = {
  verbose: true,
  moduleNameMapper: {
    '.+\\.(png|jpg|jpeg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.js?$': 'babel-jest'
  }
};
