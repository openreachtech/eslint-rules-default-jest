import core from '../../rules/core.js'

import mainExports from '../../index.js'

describe('main exports', () => {
  test('to be same', () => {
    expect(mainExports)
      .toStrictEqual(core)
  })
})
