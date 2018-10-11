const {defaults} = require('jest-config');
// const prepare = require('./webpack.config');


module.exports = {
  // globalSetup: "./jest-global-setup",
  setupFiles: ["./jest-global-setup.js"],
  "setupTestFrameworkScriptFile": "jest-extended",
  "bail": true,
  "verbose": true,
  // 'testEnvironment': 'jsdom',
  "collectCoverage": true,
  'collectCoverageFrom': [
    '!<rootDir>/jest-global-setup.js',
    '!<rootDir>/src/(router|plugins|i18n)/**',
    '<rootDir>/src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  'coverageThreshold': {
    'global': {
      'branches': 50,
      'functions': 50,
      'lines': 50,
      'statements': 50
    },
    './src/components/': {
      'branches': 40,
      'statements': 40
    },
  },
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
    // "\\.(gql|graphql)$": "jest-transform-graphql",
  },
  'transformIgnorePatterns': [
    'node_modules/core-js',
    'node_modules/babel-runtime',
    'node_modules/lodash',
    'node_modules/vue'
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  // moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'vue'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'vue'],
  "moduleNameMapper": {
    // support the same @ -> src alias mapping in source code
    "^@/(.*)$": "<rootDir>/src/$1",
    'quasar': 'quasar-framework/dist/umd/quasar.mat.umd.min.js',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    // "\\.(css|less|sass|stylus)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(css|less|sass|stylus)$": "identity-obj-proxy",
  },
  // serializer for snapshots
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  // modulePaths: ["<rootDir>/node_modules",],
  // "moduleDirectories": [
  //   "node_modules",
  //   "node_modules/quasar-cli/node_modules",
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
