import core from '../../rules/core.js'

import mainExports from '../../lib/index.js'

describe('main exports', () => {
  test('to be same', () => {
    expect(mainExports)
      .toStrictEqual(core)
  })
})
