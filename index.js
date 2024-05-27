'use strict'

const core = require('./rules/core.js')
const disableCoreStylistic = require('./rules/disable-core-stylistic.js')
const stylisticJs = require('./rules/plugins/stylistic/js.js')
const stylisticPlus = require('./rules/plugins/stylistic/plus.js')
const jestPlugin = require('./rules/plugins/jest.js')
const jsdocPlugin = require('./rules/plugins/jsdoc.js')

module.exports = {
  core,
  disableCoreStylistic,
  stylisticJs,
  stylisticPlus,
  jest: jestPlugin,
  jsdoc: jsdocPlugin,
}
