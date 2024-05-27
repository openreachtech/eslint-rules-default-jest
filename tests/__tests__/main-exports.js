'use strict'

const core = require('../../rules/core')

const mainExports = require('../../index')

describe('main exports', () => {
  test('to be same', () => {
    expect(mainExports)
      .toStrictEqual(core)
  })
})
