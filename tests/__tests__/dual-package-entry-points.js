'use strict'

const core = require('../../rules/core')

describe('dual entry points', () => {
  test('to be same', async () => {
    const { default: dualEntryPoints } = await import('../../index.mjs')

    expect(dualEntryPoints)
      .toStrictEqual(core)
  })
})
