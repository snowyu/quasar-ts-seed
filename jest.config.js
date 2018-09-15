const {defaults} = require('jest-config');

module.exports = {
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
    // "\\.(gql|graphql)$": "jest-transform-graphql",
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'vue'],
  "moduleNameMapper": {
    // "src/(.*)": "<rootDir>/src/$1",
    // "@libs/(.*)": __dirname + "/src/libs/$1",
    // "@plugins/(.*)": __dirname + "/src/plugins/$1"
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|sass|stylus)$": "<rootDir>/__mocks__/styleMock.js"
  },
  // "moduleDirectories": [
  //   "node_modules",
  //   "src"
  // ],
  "globals": {
    "ts-jest": {
      "enableTsDiagnostics": true,
      // "skipBabel": true,
      "tsConfigFile": "tsconfig.jest.json"
    }
  }
}
