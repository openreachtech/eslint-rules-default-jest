'use strict'

const stylistic = require('@stylistic/eslint-plugin-plus')

module.exports = {
  plugins: {
    '@stylistic': stylistic,
  },
  rules: {
    '@stylistic/indent-binary-ops': [
      'error',
      2,
    ],
    '@stylistic/type-generic-spacing': [
      'error',
    ],
    '@stylistic/type-named-tuple-spacing': [
      'error',
    ],
  },
}
