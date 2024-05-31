'use strict'

const jestPlugin = require('eslint-plugin-jest')

const jestFlatConfigRecommended = jestPlugin.configs['flat/recommended']

module.exports = {
  ...jestFlatConfigRecommended,

  rules: {
    ...jestFlatConfigRecommended.rules,

    'jest/consistent-test-it': [
      'error',
      {
        fn: 'test',
        withinDescribe: 'it',
      },
    ],
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: [
          'expect',
        ],
        additionalTestBlockFunctions: [],
      },
    ],
    'jest/max-expects': [
      'error',
      {
        max: 5,
      },
    ],
    'jest/max-nested-describe': [
      'error',
      {
        max: 5,
      },
    ],
    'jest/no-alias-methods': [
      'error',
    ],
    'jest/no-commented-out-tests': [
      'error',
    ],
    'jest/no-conditional-expect': [
      'error',
    ],
    'jest/no-conditional-in-test': [
      'error',
    ],
    'jest/no-deprecated-functions': [
      'error',
    ],
    'jest/no-disabled-tests': [
      'error',
    ],
    'jest/no-done-callback': [
      'error',
    ],
    'jest/no-duplicate-hooks': [
      'error',
    ],
    'jest/no-export': [
      'error',
    ],
    'jest/no-focused-tests': [
      'error',
    ],
    'jest/no-hooks': [
      'error',
      {
        allow: [
          'beforeAll',
          'beforeEach',
          'afterAll',
          'afterEach',
        ],
      },
    ],
    'jest/no-identical-title': [
      'error',
    ],
    'jest/no-interpolation-in-snapshots': [
      'error',
    ],
    'jest/no-jasmine-globals': [
      'error',
    ],
    'jest/no-large-snapshots': [
      'error',
      {
        maxSize: 12,
        inlineMaxSize: 6,
      },
    ],
    'jest/no-mocks-import': [
      'error',
    ],
    'jest/no-restricted-jest-methods': [
      'error',
      {},
    ],
    'jest/no-restricted-matchers': [
      'error',
      {},
    ],
    'jest/no-standalone-expect': [
      'error',
      {
        additionalTestBlockFunctions: [],
      },
    ],
    'jest/no-test-prefixes': [
      'error',
    ],
    'jest/no-test-return-statement': [
      'error',
    ],
    'jest/no-untyped-mock-factory': [
      'error',
    ],
    'jest/prefer-called-with': [
      'error',
    ],
    'jest/prefer-comparison-matcher': [
      'error',
    ],
    'jest/prefer-each': [
      'error',
    ],
    'jest/prefer-equality-matcher': [
      'error',
    ],
    'jest/prefer-expect-assertions': [
      'error',
    ],
    'jest/prefer-expect-resolves': [
      'error',
    ],
    'jest/prefer-hooks-in-order': [
      'error',
    ],
    'jest/prefer-hooks-on-top': [
      'error',
    ],
    'jest/prefer-lowercase-title': [
      'error',
      {
        ignore: [],
        allowedPrefixes: [],
        ignoreTopLevelDescribe: false,
      },
    ],
    'jest/prefer-mock-promise-shorthand': [
      'error',
    ],
    'jest/prefer-snapshot-hint': [
      'error',
      'multi',
    ],
    'jest/prefer-spy-on': [
      'error',
    ],
    'jest/prefer-strict-equal': [
      'error',
    ],
    'jest/prefer-to-be': [
      'error',
    ],
    'jest/prefer-to-contain': [
      'error',
    ],
    'jest/prefer-to-have-length': [
      'error',
    ],
    'jest/prefer-todo': [
      'error',
    ],
    'jest/require-hook': [
      'error',
      {
        allowedFunctionCalls: [],
      },
    ],
    'jest/require-to-throw-message': [
      'error',
    ],
    'jest/require-top-level-describe': [
      'error',
      {
        maxNumberOfTopLevelDescribes: Infinity,
      },
    ],
    'jest/valid-describe-callback': [
      'error',
    ],
    'jest/valid-expect-in-promise': [
      'error',
    ],
    'jest/valid-expect': [
      'error',
      {
        alwaysAwait: false,
        asyncMatchers: [
          'toResolve',
          'toReject',
        ],
        minArgs: 1,
        maxArgs: 1,
      },
    ],
    'jest/valid-title': [
      'error',
      {
        ignoreSpaces: false,
        ignoreTypeOfDescribeName: false,
        disallowedWords: [],
        mustMatch: {},
        mustNotMatch: {},
      },
    ],
  },
}
