import jestPlugin from 'eslint-plugin-jest'

import extractUniqueIds from '../tools/extractUniqueIds.js'

import core from '../../rules/core.js'
import deprecated from '../../rules/deprecated.js'

describe('rule coverage', () => {
  describe('core rules', () => {
    const cases = [
      { id: 'expect-expect', expected: 'jest/expect-expect' },
      { id: 'no-alias-methods', expected: 'jest/no-alias-methods' },
      { id: 'no-commented-out-tests', expected: 'jest/no-commented-out-tests' },
      { id: 'no-conditional-expect', expected: 'jest/no-conditional-expect' },
      { id: 'no-deprecated-functions', expected: 'jest/no-deprecated-functions' },
      { id: 'no-disabled-tests', expected: 'jest/no-disabled-tests' },
      { id: 'no-done-callback', expected: 'jest/no-done-callback' },
      { id: 'no-export', expected: 'jest/no-export' },
      { id: 'no-focused-tests', expected: 'jest/no-focused-tests' },
      { id: 'no-identical-title', expected: 'jest/no-identical-title' },
      { id: 'no-interpolation-in-snapshots', expected: 'jest/no-interpolation-in-snapshots' },
      { id: 'no-jasmine-globals', expected: 'jest/no-jasmine-globals' },
      { id: 'no-mocks-import', expected: 'jest/no-mocks-import' },
      { id: 'no-standalone-expect', expected: 'jest/no-standalone-expect' },
      { id: 'no-test-prefixes', expected: 'jest/no-test-prefixes' },
      { id: 'valid-describe-callback', expected: 'jest/valid-describe-callback' },
      { id: 'valid-expect', expected: 'jest/valid-expect' },
      { id: 'valid-expect-in-promise', expected: 'jest/valid-expect-in-promise' },
      { id: 'valid-title', expected: 'jest/valid-title' },
      { id: 'consistent-test-it', expected: 'jest/consistent-test-it' },
      { id: 'max-expects', expected: 'jest/max-expects' },
      { id: 'max-nested-describe', expected: 'jest/max-nested-describe' },
      { id: 'no-conditional-in-test', expected: 'jest/no-conditional-in-test' },
      { id: 'no-confusing-set-timeout', expected: 'jest/no-confusing-set-timeout' },
      { id: 'no-duplicate-hooks', expected: 'jest/no-duplicate-hooks' },
      { id: 'no-error-equal', expected: 'jest/no-error-equal' },
      { id: 'no-hooks', expected: 'jest/no-hooks' },
      { id: 'no-large-snapshots', expected: 'jest/no-large-snapshots' },
      { id: 'no-restricted-jest-methods', expected: 'jest/no-restricted-jest-methods' },
      { id: 'no-restricted-matchers', expected: 'jest/no-restricted-matchers' },
      { id: 'no-test-return-statement', expected: 'jest/no-test-return-statement' },
      { id: 'no-unnecessary-assertion', expected: 'jest/no-unnecessary-assertion' },
      { id: 'no-unneeded-async-expect-function', expected: 'jest/no-unneeded-async-expect-function' },
      { id: 'no-untyped-mock-factory', expected: 'jest/no-untyped-mock-factory' },
      { id: 'padding-around-after-all-blocks', expected: 'jest/padding-around-after-all-blocks' },
      { id: 'padding-around-after-each-blocks', expected: 'jest/padding-around-after-each-blocks' },
      { id: 'padding-around-all', expected: 'jest/padding-around-all' },
      { id: 'padding-around-before-all-blocks', expected: 'jest/padding-around-before-all-blocks' },
      { id: 'padding-around-before-each-blocks', expected: 'jest/padding-around-before-each-blocks' },
      { id: 'padding-around-describe-blocks', expected: 'jest/padding-around-describe-blocks' },
      { id: 'padding-around-expect-groups', expected: 'jest/padding-around-expect-groups' },
      { id: 'padding-around-test-blocks', expected: 'jest/padding-around-test-blocks' },
      { id: 'prefer-called-with', expected: 'jest/prefer-called-with' },
      { id: 'prefer-comparison-matcher', expected: 'jest/prefer-comparison-matcher' },
      { id: 'prefer-each', expected: 'jest/prefer-each' },
      { id: 'prefer-ending-with-an-expect', expected: 'jest/prefer-ending-with-an-expect' },
      { id: 'prefer-equality-matcher', expected: 'jest/prefer-equality-matcher' },
      { id: 'prefer-expect-assertions', expected: 'jest/prefer-expect-assertions' },
      { id: 'prefer-expect-resolves', expected: 'jest/prefer-expect-resolves' },
      { id: 'prefer-hooks-in-order', expected: 'jest/prefer-hooks-in-order' },
      { id: 'prefer-hooks-on-top', expected: 'jest/prefer-hooks-on-top' },
      { id: 'prefer-importing-jest-globals', expected: 'jest/prefer-importing-jest-globals' },
      { id: 'prefer-jest-mocked', expected: 'jest/prefer-jest-mocked' },
      { id: 'prefer-lowercase-title', expected: 'jest/prefer-lowercase-title' },
      { id: 'prefer-mock-promise-shorthand', expected: 'jest/prefer-mock-promise-shorthand' },
      { id: 'prefer-mock-return-shorthand', expected: 'jest/prefer-mock-return-shorthand' },
      { id: 'prefer-snapshot-hint', expected: 'jest/prefer-snapshot-hint' },
      { id: 'prefer-spy-on', expected: 'jest/prefer-spy-on' },
      { id: 'prefer-strict-equal', expected: 'jest/prefer-strict-equal' },
      { id: 'prefer-to-be', expected: 'jest/prefer-to-be' },
      { id: 'prefer-to-contain', expected: 'jest/prefer-to-contain' },
      { id: 'prefer-to-have-been-called', expected: 'jest/prefer-to-have-been-called' },
      { id: 'prefer-to-have-been-called-times', expected: 'jest/prefer-to-have-been-called-times' },
      { id: 'prefer-to-have-length', expected: 'jest/prefer-to-have-length' },
      { id: 'prefer-todo', expected: 'jest/prefer-todo' },
      { id: 'require-hook', expected: 'jest/require-hook' },
      { id: 'require-to-throw-message', expected: 'jest/require-to-throw-message' },
      { id: 'require-top-level-describe', expected: 'jest/require-top-level-describe' },
      { id: 'unbound-method', expected: 'jest/unbound-method' },
      { id: 'valid-expect-with-promise', expected: 'jest/valid-expect-with-promise' },
      { id: 'valid-mock-module-path', expected: 'jest/valid-mock-module-path' },
    ]

    describe('should prefix each id with the plugin namespace', () => {
      test.each(cases)('id: $id', ({ id, expected }) => {
        const received = `jest/${id}`

        expect(received)
          .toBe(expected)
      })
    })

    describe('should declare each rule of the plugin as an error', () => {
      test.each(cases)('id: $id', ({ id, expected }) => {
        expect(jestPlugin.rules)
          .toHaveProperty(id)

        expect(core.rules)
          .toHaveProperty(expected, expect.any(Array))
        expect(core.rules)
          .toHaveProperty([expected, 0], 'error')
      })
    })

    test('should have a case for each declared rule', () => {
      const received = extractUniqueIds({ values: cases })

      expect(received)
        .toHaveLength(Object.keys(core.rules).length)
    })
  })

  describe('plugin rules', () => {
    test('should have no rule left undeclared', () => {
      const expected = Object.keys(core.rules).length
        + Object.keys(deprecated.rules).length

      const received = Object.keys(jestPlugin.rules)

      expect(received)
        .toHaveLength(expected)
    })
  })
})
