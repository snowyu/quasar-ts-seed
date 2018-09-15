
module.exports = function (api) {
  api.cache(true)
  return {
    "sourceMaps": "inline",
    "presets": [
      [
        "@babel/preset-env", {
          "modules": false,
          "loose": false,
          "useBuiltIns": "usage"
        }
      ]
    ],
    "plugins": [
      // Stage 2
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",
      // Stage 3
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      ["@babel/plugin-proposal-class-properties", { "loose": false }],
      "@babel/plugin-proposal-json-strings",
      [
        "@babel/transform-runtime", {
          "regenerator": false
        }
      ]
    ],
    "env": {
      "test": {
        "plugins": ["@babel/plugin-transform-modules-commonjs"]
      }
    },
    "comments": false
  }
}
