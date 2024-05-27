'use strict'

const disableCoreStylistic = require('../../../rules/disable-core-stylistic')
const stylisticJs = require('../../../rules/plugins/stylistic/js')

describe('disable-core-stylistic rules', () => {
  const cases = [
    {
      args: {
        disableRule: 'array-bracket-newline',
        stylisticRule: '@stylistic/array-bracket-newline',
      },
    },
    {
      args: {
        disableRule: 'array-bracket-spacing',
        stylisticRule: '@stylistic/array-bracket-spacing',
      },
    },
    {
      args: {
        disableRule: 'array-element-newline',
        stylisticRule: '@stylistic/array-element-newline',
      },
    },
    {
      args: {
        disableRule: 'arrow-parens',
        stylisticRule: '@stylistic/arrow-parens',
      },
    },
    {
      args: {
        disableRule: 'arrow-spacing',
        stylisticRule: '@stylistic/arrow-spacing',
      },
    },
    {
      args: {
        disableRule: 'block-spacing',
        stylisticRule: '@stylistic/block-spacing',
      },
    },
    {
      args: {
        disableRule: 'brace-style',
        stylisticRule: '@stylistic/brace-style',
      },
    },
    {
      args: {
        disableRule: 'comma-dangle',
        stylisticRule: '@stylistic/comma-dangle',
      },
    },
    {
      args: {
        disableRule: 'comma-spacing',
        stylisticRule: '@stylistic/comma-spacing',
      },
    },
    {
      args: {
        disableRule: 'comma-style',
        stylisticRule: '@stylistic/comma-style',
      },
    },
    {
      args: {
        disableRule: 'computed-property-spacing',
        stylisticRule: '@stylistic/computed-property-spacing',
      },
    },
    {
      args: {
        disableRule: 'dot-location',
        stylisticRule: '@stylistic/dot-location',
      },
    },
    {
      args: {
        disableRule: 'eol-last',
        stylisticRule: '@stylistic/eol-last',
      },
    },
    {
      args: {
        disableRule: 'function-call-argument-newline',
        stylisticRule: '@stylistic/function-call-argument-newline',
      },
    },
    {
      args: {
        disableRule: 'function-call-spacing',
        stylisticRule: '@stylistic/function-call-spacing',
      },
    },
    {
      args: {
        disableRule: 'function-paren-newline',
        stylisticRule: '@stylistic/function-paren-newline',
      },
    },
    {
      args: {
        disableRule: 'generator-star-spacing',
        stylisticRule: '@stylistic/generator-star-spacing',
      },
    },
    {
      args: {
        disableRule: 'implicit-arrow-linebreak',
        stylisticRule: '@stylistic/implicit-arrow-linebreak',
      },
    },
    {
      args: {
        disableRule: 'indent',
        stylisticRule: '@stylistic/indent',
      },
    },
    {
      args: {
        disableRule: 'jsx-quotes',
        stylisticRule: '@stylistic/jsx-quotes',
      },
    },
    {
      args: {
        disableRule: 'key-spacing',
        stylisticRule: '@stylistic/key-spacing',
      },
    },
    {
      args: {
        disableRule: 'keyword-spacing',
        stylisticRule: '@stylistic/keyword-spacing',
      },
    },
    {
      args: {
        disableRule: 'line-comment-position',
        stylisticRule: '@stylistic/line-comment-position',
      },
    },
    {
      args: {
        disableRule: 'linebreak-style',
        stylisticRule: '@stylistic/linebreak-style',
      },
    },
    {
      args: {
        disableRule: 'lines-around-comment',
        stylisticRule: '@stylistic/lines-around-comment',
      },
    },
    {
      args: {
        disableRule: 'lines-between-class-members',
        stylisticRule: '@stylistic/lines-between-class-members',
      },
    },
    {
      args: {
        disableRule: 'max-len',
        stylisticRule: '@stylistic/max-len',
      },
    },
    {
      args: {
        disableRule: 'max-statements-per-line',
        stylisticRule: '@stylistic/max-statements-per-line',
      },
    },
    {
      args: {
        disableRule: 'multiline-comment-style',
        stylisticRule: '@stylistic/multiline-comment-style',
      },
    },
    {
      args: {
        disableRule: 'multiline-ternary',
        stylisticRule: '@stylistic/multiline-ternary',
      },
    },
    {
      args: {
        disableRule: 'new-parens',
        stylisticRule: '@stylistic/new-parens',
      },
    },
    {
      args: {
        disableRule: 'newline-per-chained-call',
        stylisticRule: '@stylistic/newline-per-chained-call',
      },
    },
    {
      args: {
        disableRule: 'no-confusing-arrow',
        stylisticRule: '@stylistic/no-confusing-arrow',
      },
    },
    {
      args: {
        disableRule: 'no-extra-parens',
        stylisticRule: '@stylistic/no-extra-parens',
      },
    },
    {
      args: {
        disableRule: 'no-extra-semi',
        stylisticRule: '@stylistic/no-extra-semi',
      },
    },
    {
      args: {
        disableRule: 'no-floating-decimal',
        stylisticRule: '@stylistic/no-floating-decimal',
      },
    },
    {
      args: {
        disableRule: 'no-mixed-operators',
        stylisticRule: '@stylistic/no-mixed-operators',
      },
    },
    {
      args: {
        disableRule: 'no-mixed-spaces-and-tabs',
        stylisticRule: '@stylistic/no-mixed-spaces-and-tabs',
      },
    },
    {
      args: {
        disableRule: 'no-multi-spaces',
        stylisticRule: '@stylistic/no-multi-spaces',
      },
    },
    {
      args: {
        disableRule: 'no-multiple-empty-lines',
        stylisticRule: '@stylistic/no-multiple-empty-lines',
      },
    },
    {
      args: {
        disableRule: 'no-tabs',
        stylisticRule: '@stylistic/no-tabs',
      },
    },
    {
      args: {
        disableRule: 'no-trailing-spaces',
        stylisticRule: '@stylistic/no-trailing-spaces',
      },
    },
    {
      args: {
        disableRule: 'no-whitespace-before-property',
        stylisticRule: '@stylistic/no-whitespace-before-property',
      },
    },
    {
      args: {
        disableRule: 'nonblock-statement-body-position',
        stylisticRule: '@stylistic/nonblock-statement-body-position',
      },
    },
    {
      args: {
        disableRule: 'object-curly-newline',
        stylisticRule: '@stylistic/object-curly-newline',
      },
    },
    {
      args: {
        disableRule: 'object-curly-spacing',
        stylisticRule: '@stylistic/object-curly-spacing',
      },
    },
    {
      args: {
        disableRule: 'object-property-newline',
        stylisticRule: '@stylistic/object-property-newline',
      },
    },
    {
      args: {
        disableRule: 'one-var-declaration-per-line',
        stylisticRule: '@stylistic/one-var-declaration-per-line',
      },
    },
    {
      args: {
        disableRule: 'operator-linebreak',
        stylisticRule: '@stylistic/operator-linebreak',
      },
    },
    {
      args: {
        disableRule: 'padded-blocks',
        stylisticRule: '@stylistic/padded-blocks',
      },
    },
    {
      args: {
        disableRule: 'padding-line-between-statements',
        stylisticRule: '@stylistic/padding-line-between-statements',
      },
    },
    {
      args: {
        disableRule: 'quote-props',
        stylisticRule: '@stylistic/quote-props',
      },
    },
    {
      args: {
        disableRule: 'quotes',
        stylisticRule: '@stylistic/quotes',
      },
    },
    {
      args: {
        disableRule: 'rest-spread-spacing',
        stylisticRule: '@stylistic/rest-spread-spacing',
      },
    },
    {
      args: {
        disableRule: 'semi',
        stylisticRule: '@stylistic/semi',
      },
    },
    {
      args: {
        disableRule: 'semi-spacing',
        stylisticRule: '@stylistic/semi-spacing',
      },
    },
    {
      args: {
        disableRule: 'semi-style',
        stylisticRule: '@stylistic/semi-style',
      },
    },
    {
      args: {
        disableRule: 'space-before-blocks',
        stylisticRule: '@stylistic/space-before-blocks',
      },
    },
    {
      args: {
        disableRule: 'space-before-function-paren',
        stylisticRule: '@stylistic/space-before-function-paren',
      },
    },
    {
      args: {
        disableRule: 'space-in-parens',
        stylisticRule: '@stylistic/space-in-parens',
      },
    },
    {
      args: {
        disableRule: 'space-infix-ops',
        stylisticRule: '@stylistic/space-infix-ops',
      },
    },
    {
      args: {
        disableRule: 'space-unary-ops',
        stylisticRule: '@stylistic/space-unary-ops',
      },
    },
    {
      args: {
        disableRule: 'spaced-comment',
        stylisticRule: '@stylistic/spaced-comment',
      },
    },
    {
      args: {
        disableRule: 'switch-colon-spacing',
        stylisticRule: '@stylistic/switch-colon-spacing',
      },
    },
    {
      args: {
        disableRule: 'template-curly-spacing',
        stylisticRule: '@stylistic/template-curly-spacing',
      },
    },
    {
      args: {
        disableRule: 'template-tag-spacing',
        stylisticRule: '@stylistic/template-tag-spacing',
      },
    },
    {
      args: {
        disableRule: 'wrap-iife',
        stylisticRule: '@stylistic/wrap-iife',
      },
    },
    {
      args: {
        disableRule: 'wrap-regex',
        stylisticRule: '@stylistic/wrap-regex',
      },
    },
    {
      args: {
        disableRule: 'yield-star-spacing',
        stylisticRule: '@stylistic/yield-star-spacing',
      },
    },
  ]

  describe('should be same length', () => {
    test('of disable-core-stylistic', () => {
      const ruleNames = Object.keys(disableCoreStylistic.rules)

      expect(ruleNames)
        .toHaveLength(cases.length)
    })

    test('of stylistic/js', () => {
      const ruleNames = Object.keys(stylisticJs.rules)

      expect(ruleNames)
        .toHaveLength(cases.length)
    })
  })

  describe('should include all keys', () => {
    test.each(cases)('rule: $disableRule', ({ args }) => {
      expect(disableCoreStylistic.rules)
        .toHaveProperty(
          args.disableRule,
          'off'
        )

      expect(stylisticJs.rules)
        .toHaveProperty(
          args.stylisticRule,
          expect.any(Array)
        )
    })
  })
})
