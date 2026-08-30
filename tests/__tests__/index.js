import mainExports, {
  deprecated as mainDeprecated,
} from '../../lib/index.js'

import core from '../../rules/core.js'
import deprecated from '../../rules/deprecated.js'

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

describe('main exports', () => {
  describe('named export', () => {
    describe('as deprecated', () => {
      describe('when imported', () => {
        test('should be the deprecated ruleset', () => {
          const received = mainDeprecated

          expect(received)
            .toBe(deprecated) // same reference
        })
      })
    })
  })
})
