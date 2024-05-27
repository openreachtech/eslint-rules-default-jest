'use strict'

const core = require('../../rules/core.js')
const disableCoreStylistic = require('../../rules/disable-core-stylistic.js')
const stylisticJs = require('../../rules/plugins/stylistic/js.js')
const stylisticPlus = require('../../rules/plugins/stylistic/plus.js')
const jestPlugin = require('../../rules/plugins/jest.js')
const jsdocPlugin = require('../../rules/plugins/jsdoc.js')

describe('dual entry points', () => {
  test('to exist', async () => {
    const { default: dualEntryPoints } = await import('../../index.mjs')

    expect(dualEntryPoints)
      .toBeTruthy()
  })

  describe('to have property', () => {
    const cases = [
      {
        args: {
          propertyName: 'core',
          ruleSet: core,
        },
      },
      {
        args: {
          propertyName: 'disableCoreStylistic',
          ruleSet: disableCoreStylistic,
        },
      },
      {
        args: {
          propertyName: 'stylisticJs',
          ruleSet: stylisticJs,
        },
      },
      {
        args: {
          propertyName: 'stylisticPlus',
          ruleSet: stylisticPlus,
        },
      },
      {
        args: {
          propertyName: 'jest',
          ruleSet: jestPlugin,
        },
      },
      {
        args: {
          propertyName: 'jsdoc',
          ruleSet: jsdocPlugin,
        },
      },
    ]

    test.each(cases)('property: $args.propertyName', async ({ args }) => {
      const { default: dualEntryPoints } = await import('../../index.mjs')

      expect(dualEntryPoints)
        .toHaveProperty(
          args.propertyName,
          args.ruleSet
        )
    })
  })
})
