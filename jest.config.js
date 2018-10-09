const {defaults} = require('jest-config');

module.exports = {
  "collectCoverage": true,
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
    // "\\.(gql|graphql)$": "jest-transform-graphql",
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  // moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'vue'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'vue'],
  "moduleNameMapper": {
    // support the same @ -> src alias mapping in source code
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    // "\\.(css|less|sass|stylus)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(css|less|sass|stylus)$": "identity-obj-proxy",
  },
  // serializer for snapshots
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  // "moduleDirectories": [
  //   "node_modules",
  //   "src"
  // ],
  "globals": {
    "vue-jest": {
      // "babelConfig": ".babelrc",
      "tsConfig": __dirname + "/tsconfig.jest.json"
    },
    "ts-jest": {
      "diagnostics": true,
      // "skipBabel": true,
      "tsConfig": "tsconfig.jest.json"
    }
  }
}
