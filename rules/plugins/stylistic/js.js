'use strict'

const stylisticJs = require('@stylistic/eslint-plugin-js')

module.exports = {
  plugins: {
    '@stylistic': stylisticJs,
  },
  rules: {
    '@stylistic/array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: null,
      },
    ],
    '@stylistic/array-bracket-spacing': [
      'error',
      'never',
      {
        arraysInArrays: false,
        objectsInArrays: false,
        singleValue: false,
      },
    ],
    '@stylistic/array-element-newline': [
      'error',
      'always',
      {
        multiline: false,
        minItems: null,
      },
    ],
    '@stylistic/arrow-parens': [
      'error',
      'always',
      {
        requireForBlockBody: false,
      },
    ],
    '@stylistic/arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/block-spacing': [
      'error',
      'always',
    ],
    '@stylistic/brace-style': [
      'error',
      '1tbs', // = One True Brace Style
      {
        allowSingleLine: false,
      },
    ],
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    '@stylistic/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/comma-style': [
      'error',
      'last',
    ],
    '@stylistic/computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],
    '@stylistic/dot-location': [
      'error',
      'object',
    ],
    '@stylistic/eol-last': [
      'error',
      'always',
    ],
    '@stylistic/function-call-argument-newline': [
      'error',
      'always',
    ],
    '@stylistic/function-call-spacing': [
      'error',
      'never',
    ],
    '@stylistic/function-paren-newline': [
      'error',
      'multiline',
    ],
    '@stylistic/generator-star-spacing': [
      'error',
      {
        before: true,
        after: false,
      },
    ],
    '@stylistic/implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    '@stylistic/indent': [
      'error',
      4,
      {
        ignoredNodes: [],
        SwitchCase: 0,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        StaticBlock: {
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false,
      },
    ],
    '@stylistic/jsx-quotes': [
      'error',
      'prefer-double',
    ],
    '@stylistic/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    '@stylistic/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/line-comment-position': [
      'error',
      {
        position: 'above',
        applyDefaultIgnorePatterns: true,
        ignorePattern: '',
      },
    ],
    '@stylistic/linebreak-style': [
      'error',
      'unix',
    ],
    '@stylistic/lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowArrayStart: false,
        allowArrayEnd: false,
        allowBlockStart: false,
        allowBlockEnd: false,
        allowClassStart: false,
        allowClassEnd: false,
        allowObjectStart: false,
        allowObjectEnd: false,
        ignorePattern: '',
        applyDefaultIgnorePatterns: true,
        afterHashbangComment: false,
      },
    ],
    '@stylistic/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
    '@stylistic/max-len': [
      'error',
      {
        code: 80,
        tabWidth: 4,
      },
    ],
    '@stylistic/max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    '@stylistic/multiline-comment-style': [
      'error',
      'starred-block',
    ],
    '@stylistic/multiline-ternary': [
      'error',
      'always',
    ],
    '@stylistic/new-parens': [
      'error',
      'always',
    ],
    '@stylistic/newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    '@stylistic/no-confusing-arrow': [
      'error',
      {
        allowParens: true,
        onlyOneSimpleParam: false,
      },
    ],
    '@stylistic/no-extra-parens': [
      'error',
      'all',
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'none',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false,
        allowParensAfterCommentPattern: '',
      },
    ],
    '@stylistic/no-extra-semi': [
      'error',
    ],
    '@stylistic/no-floating-decimal': [
      'error',
    ],
    '@stylistic/no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
        groups: [
          [
            '+',
            '-',
            '*',
            '/',
            '%',
            '**',
          ],
          [
            '&',
            '|',
            '^',
            '~',
            '<<',
            '>>',
            '>>>',
          ],
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          [
            '&&',
            '||',
          ],
          [
            'in',
            'instanceof',
          ],
        ],
      },
    ],
    '@stylistic/no-mixed-spaces-and-tabs': [
      'error',
    ],
    '@stylistic/no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
        exceptions: {
          Property: true,
        },
      },
    ],
    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 2,
        maxEOF: 2,
      },
    ],
    '@stylistic/no-tabs': [
      'error',
      {
        allowIndentationTabs: false,
      },
    ],
    '@stylistic/no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    '@stylistic/no-whitespace-before-property': [
      'error',
    ],
    '@stylistic/nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],
    '@stylistic/object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          multiline: false,
          minProperties: Infinity,
        },
        ObjectPattern: {
          consistent: true,
          multiline: false,
          minProperties: Infinity,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: false,
          minProperties: Infinity,
        },
        ExportDeclaration: {
          consistent: true,
          multiline: false,
          minProperties: Infinity,
        },
      },
    ],
    '@stylistic/object-curly-spacing': [
      'error',
      'never',
      {
        arraysInObjects: false,
        objectsInObjects: false,
      },
    ],
    '@stylistic/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    '@stylistic/one-var-declaration-per-line': [
      'error',
      'initializations',
    ],
    '@stylistic/operator-linebreak': [
      'error',
      'after',
      {
        overrides: {},
      },
    ],
    '@stylistic/padded-blocks': [
      'error',
      'always',
      {
        allowSingleLineBlocks: false,
      },
    ],
    '@stylistic/padding-line-between-statements': [
      'error',
    ],
    '@stylistic/quote-props': [
      'error',
      'always',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    '@stylistic/quotes': [
      'error',
      'double',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    '@stylistic/rest-spread-spacing': [
      'error',
      'never',
    ],
    '@stylistic/semi': [
      'error',
      'always',
      {
        beforeStatementContinuationChars: 'any',
      },
    ],
    '@stylistic/semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/semi-style': [
      'error',
      'last',
    ],
    '@stylistic/space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      },
    ],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'always',
        asyncArrow: 'always',
      },
    ],
    '@stylistic/space-in-parens': [
      'error',
      'never',
    ],
    '@stylistic/space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    '@stylistic/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: [
            '/',
            '-',
            '=',
            '+',
          ],
          markers: [
            '*',
          ],
        },
        block: {
          exceptions: [
            '*',
          ],
          markers: [
            '*',
          ],
          balanced: true,
        },
        markers: [
          '*',
        ],
        exceptions: [],
      },
    ],
    '@stylistic/switch-colon-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/template-curly-spacing': [
      'error',
      'never',
    ],
    '@stylistic/template-tag-spacing': [
      'error',
      'never',
    ],
    '@stylistic/wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],
    '@stylistic/wrap-regex': [
      'error',
    ],
    '@stylistic/yield-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
  },
}
