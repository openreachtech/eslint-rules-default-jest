import mainExports from '../../lib/index.js'

import core from '../../rules/core.js'

describe('main exports', () => {
  describe('default export', () => {
    describe('when imported', () => {
      test('should be the core ruleset', () => {
        const received = mainExports

        expect(received)
          .toBe(core) // same reference
      })
    })
  })
})
