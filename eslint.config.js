import jsRules from '@eslint/js'
import jsdocPlugin from 'eslint-plugin-jsdoc'
import openreachtechPlugin from 'eslint-plugin-openreachtech'

import jestPlugin from './lib/index.js'

/**
 * ESLint Config
 *
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  {
    languageOptions: {
      globals: {
        console: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
      sourceType: 'module',
    },
  },

  /*
   * If ignores is used without any other keys in the configuration object, then the patterns act as global ignores. Here’s an example:
   *
   * https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
   */
  {
    ignores: [
      '**/node_modules/**',
    ],
  },

  {
    rules: {
      ...jsRules.configs
        .all
        .rules,

      indent: [
        'error',
        2,
        {
          ignoredNodes: [],
          SwitchCase: 1,
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
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      semi: [
        'error',
        'never',
        {
          beforeStatementContinuationChars: 'never',
        },
      ],
      'accessor-pairs': [
        'error',
        {
          setWithoutGet: true,
          getWithoutSet: false,
          enforceForClassMembers: true,
        },
      ],
      'array-bracket-newline': [
        'error',
        'consistent',
      ],
      'array-bracket-spacing': [
        'error',
        'never',
        {
          arraysInArrays: false,
          objectsInArrays: false,
          singleValue: false,
        },
      ],
      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: true,
        },
      ],
      'array-element-newline': [
        'error',
        'consistent',
        {
          multiline: true,
          minItems: null,
        },
      ],
      'arrow-body-style': [
        'error',
        'as-needed',
        {
          requireReturnForObjectLiteral: false,
        },
      ],
      'arrow-parens': [
        'error',
        'as-needed',
        {
          requireForBlockBody: false,
        },
      ],
      'arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'block-scoped-var': [
        'error',
      ],
      'block-spacing': [
        'error',
        'always',
      ],
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],
      camelcase: [
        'error',
        {
          properties: 'always',
          ignoreDestructuring: false,
          ignoreImports: false,
          ignoreGlobals: false,
          allow: [],
        },
      ],
      'capitalized-comments': [
        'off', // 'error'
        'always',
        {
          ignoreInlineComments: false,
          ignoreConsecutiveComments: false,
          ignorePattern: '^$',
        },
      ],
      'class-methods-use-this': [
        'off', // 'error'
        {
          enforceForClassFields: true,
          exceptMethods: [],
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'comma-style': [
        'error',
        'last',
      ],
      complexity: [
        'error',
        {
          max: 8,
        },
      ],
      'computed-property-spacing': [
        'error',
        'never',
        {
          enforceForClassMembers: true,
        },
      ],
      'consistent-return': [
        'error',
        {
          treatUndefinedAsUnspecified: true,
        },
      ],
      'consistent-this': [
        'error',
        'that',
      ],
      'constructor-super': [
        'error',
      ],
      curly: [
        'error',
        'all',
      ],
      'default-case': [
        'error',
      ],
      'default-case-last': [
        'error',
      ],
      'default-param-last': [
        'error',
      ],
      'dot-location': [
        'error',
        'property',
      ],
      'dot-notation': [
        'off', // 'error'
        {
          allowKeywords: true,
          allowPattern: '^$',
        },
      ],
      'eol-last': [
        'error',
        'always',
      ],
      eqeqeq: [
        'error',
        'always',
      ],
      'for-direction': [
        'off', // 'error'
      ],
      'func-call-spacing': [
        'error',
        'never',
      ],
      'func-name-matching': [
        'error',
        'always',
      ],
      'func-names': [
        'error',
        'as-needed',
      ],
      'func-style': [
        'off', // 'error'
        'expression',
        {
          allowArrowFunctions: false,
        },
      ],
      'function-call-argument-newline': [
        'error',
        'consistent',
      ],
      'function-paren-newline': [
        'off',
        'consistent',
      ],
      'generator-star-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'getter-return': [
        'error',
        {
          allowImplicit: false,
        },
      ],
      'grouped-accessor-pairs': [
        'error',
        'getBeforeSet',
      ],
      'guard-for-in': [
        'off', // 'error'
      ],
      'id-denylist': [
        'error',
        'item',
        'list',
      ],
      'id-length': [
        'error',
        {
          min: 2,
          properties: 'always',
          exceptions: [
            '_',
            '$',
          ],
          exceptionPatterns: [],
        },
      ],
      'id-match': [
        'error',
        '^[\\$\\w]+$',
        {
          properties: true,
          classFields: true,
          onlyDeclarations: false,
          ignoreDestructuring: false,
        },
      ],
      'implicit-arrow-linebreak': [
        'off',
        'beside',
      ],
      'init-declarations': [
        'error',
        'always',
      ],
      'jsx-quotes': [
        'error',
        'prefer-double',
      ],
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
          mode: 'strict',
        },
      ],
      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'line-comment-position': [
        'off',
        {
          position: 'above',
          applyDefaultIgnorePatterns: true,
          ignorePattern: '^$',
        },
      ],
      'linebreak-style': [
        'error',
        'unix',
      ],
      'lines-around-comment': [
        'error',
        {
          beforeBlockComment: true,
          afterBlockComment: false,
          beforeLineComment: false,
          afterLineComment: false,
          allowArrayStart: true,
          allowArrayEnd: false,
          allowBlockStart: true,
          allowBlockEnd: false,
          allowClassStart: true,
          allowClassEnd: false,
          allowObjectStart: true,
          allowObjectEnd: false,
          ignorePattern: '',
          applyDefaultIgnorePatterns: true,
        },
      ],
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: false,
        },
      ],
      'logical-assignment-operators': [
        'error',
        'always',
        {
          enforceForIfStatements: false,
        },
      ],
      'max-classes-per-file': [
        'error',
        {
          max: 1,
          ignoreExpressions: true,
        },
      ],
      'max-depth': [
        'error',
        4,
      ],
      'max-len': [
        'off',
        {
          code: 80,
          tabWidth: 4,
        },
      ],
      'max-lines': [
        'off', // 'error'
        {
          max: 300,
          skipBlankLines: false,
          skipComments: false,
        },
      ],
      'max-lines-per-function': [
        'off', // 'error'
        {
          max: 50,
          skipBlankLines: false,
          skipComments: false,
          IIFEs: false,
        },
      ],
      'max-nested-callbacks': [
        'error',
        10,
      ],
      'max-params': [
        'error',
        4,
      ],
      'max-statements': [
        'off', // 'error'
        10,
      ],
      'max-statements-per-line': [
        'error',
        {
          max: 1,
        },
      ],
      'multiline-comment-style': [
        'off',
        'starred-block',
      ],
      'multiline-ternary': [
        'error',
        'always',
      ],
      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: true,
          newIsCapExceptions: [],
          capIsNewExceptions: [
            'DATE',
            'STRING',
            'TINYINT',
          ],
          properties: true,
        },
      ],
      'new-parens': [
        'error',
        'always',
      ],
      'newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 1,
        },
      ],
      'no-alert': [
        'error',
      ],
      'no-array-constructor': [
        'error',
      ],
      'no-async-promise-executor': [
        'error',
      ],
      'no-await-in-loop': [
        'error',
      ],
      'no-bitwise': [
        'off', // 'error'
        {
          allow: [],
          int32Hint: false,
        },
      ],
      'no-caller': [
        'error',
      ],
      'no-case-declarations': [
        'error',
      ],
      'no-class-assign': [
        'error',
      ],
      'no-compare-neg-zero': [
        'error',
      ],
      'no-cond-assign': [
        'error',
        'except-parens',
      ],
      'no-confusing-arrow': [
        'error',
        {
          allowParens: true,
          onlyOneSimpleParam: false,
        },
      ],
      'no-console': [
        'error',
      ],
      'no-const-assign': [
        'error',
      ],
      'no-constant-binary-expression': [
        'error',
      ],
      'no-constant-condition': [
        'error',
        {
          checkLoops: true,
        },
      ],
      'no-constructor-return': [
        'error',
      ],
      'no-continue': [
        'off', // 'error'
      ],
      'no-control-regex': [
        'error',
      ],
      'no-debugger': [
        'error',
      ],
      'no-delete-var': [
        'error',
      ],
      'no-div-regex': [
        'error',
      ],
      'no-dupe-args': [
        'error',
      ],
      'no-dupe-class-members': [
        'error',
      ],
      'no-dupe-else-if': [
        'error',
      ],
      'no-dupe-keys': [
        'error',
      ],
      'no-duplicate-case': [
        'error',
      ],
      'no-duplicate-imports': [
        'error',
        {
          includeExports: false,
        },
      ],
      'no-else-return': [
        'error',
        {
          allowElseIf: true,
        },
      ],
      'no-empty': [
        'error',
        {
          allowEmptyCatch: false,
        },
      ],
      'no-empty-character-class': [
        'error',
      ],
      'no-empty-function': [
        'error',
        {
          allow: [
            'arrowFunctions',
          ],
        },
      ],
      'no-empty-pattern': [
        'error',
      ],
      'no-eq-null': [
        'error',
      ],
      'no-eval': [
        'error',
      ],
      'no-ex-assign': [
        'error',
      ],
      'no-extend-native': [
        'error',
      ],
      'no-extra-bind': [
        'error',
      ],
      'no-extra-boolean-cast': [
        'error',
        {
          enforceForLogicalOperands: true,
        },
      ],
      'no-extra-label': [
        'error',
      ],
      'no-extra-parens': [
        'off',
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
        },
      ],
      'no-extra-semi': [
        'error',
      ],
      'no-fallthrough': [
        'error',
        {
          allowEmptyCase: true,
        },
      ],
      'no-floating-decimal': [
        'error',
      ],
      'no-func-assign': [
        'error',
      ],
      'no-global-assign': [
        'error',
        {
          exceptions: [],
        },
      ],
      'no-implicit-coercion': [
        'error',
        {
          boolean: true,
          number: true,
          string: true,
          disallowTemplateShorthand: true,
          allow: [],
        },
      ],
      'no-implicit-globals': [
        'error',
        {
          lexicalBindings: false,
        },
      ],
      'no-implied-eval': [
        'error',
      ],
      'no-import-assign': [
        'error',
      ],
      'no-inline-comments': [
        'off', // 'error'
        {
          ignorePattern: '^$',
        },
      ],
      'no-inner-declarations': [
        'error',
        'functions',
      ],
      'no-invalid-regexp': [
        'error',
        {
          allowConstructorFlags: [],
        },
      ],
      'no-invalid-this': [
        'error',
        {
          capIsConstructor: true,
        },
      ],
      'no-irregular-whitespace': [
        'error',
        {
          skipComments: false,
          skipRegExps: false,
          skipStrings: false,
          skipTemplates: false,
        },
      ],
      'no-iterator': [
        'error',
      ],
      'no-label-var': [
        'error',
      ],
      'no-labels': [
        'error',
        {
          allowLoop: false,
          allowSwitch: false,
        },
      ],
      'no-lone-blocks': [
        'off', // 'error'
      ],
      'no-lonely-if': [
        'error',
      ],
      'no-loop-func': [
        'error',
      ],
      'no-loss-of-precision': [
        'error',
      ],
      'no-magic-numbers': [
        'off', // 'error'
        {
          detectObjects: false,
          enforceConst: false,
          ignore: [],
          ignoreArrayIndexes: false,
          ignoreDefaultValues: false,
        },
      ],
      'no-misleading-character-class': [
        'error',
      ],
      'no-mixed-operators': [
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
      'no-mixed-spaces-and-tabs': [
        'error',
      ],
      'no-multi-assign': [
        'error',
        {
          ignoreNonDeclaration: false,
        },
      ],
      'no-multi-spaces': [
        'error',
        {
          ignoreEOLComments: false,
          exceptions: {
            Property: true,
          },
        },
      ],
      'no-multi-str': [
        'error',
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      'no-negated-condition': [
        'error',
      ],
      'no-nested-ternary': [
        'error',
      ],
      'no-new': [
        'error',
      ],
      'no-new-func': [
        'error',
      ],
      'no-new-object': [
        'error',
      ],
      'no-new-symbol': [
        'error',
      ],
      'no-new-wrappers': [
        'error',
      ],
      'no-nonoctal-decimal-escape': [
        'error',
      ],
      'no-obj-calls': [
        'error',
      ],
      'no-octal': [
        'error',
      ],
      'no-octal-escape': [
        'error',
      ],
      'no-param-reassign': [
        'error',
        {
          props: true,
        },
      ],
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: false,
        },
      ],
      'no-promise-executor-return': [
        'error',
      ],
      'no-proto': [
        'error',
      ],
      'no-prototype-builtins': [
        'error',
      ],
      'no-redeclare': [
        'error',
        {
          builtinGlobals: true,
        },
      ],
      'no-regex-spaces': [
        'error',
      ],
      'no-restricted-exports': [
        'error',
      ],
      'no-restricted-globals': [
        'error',
      ],
      'no-restricted-imports': [
        'error',
      ],
      'no-restricted-properties': [
        'error',
        {
          object: 'expect',
          property: 'anything',
          message: 'Never use `expect.anything()`.',
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CallExpression[callee.property.name=forEach]',
          message: 'Never use forEach method',
        },
        {
          selector: 'CallExpression[callee.type=MemberExpression][callee.property.name=/^(every|filter|find|findIndex|findLast|findLastIndex|flatMap|forEach|group|groupToMap|map|reduce|reduceRight|some)$/] IfStatement',
          message: 'Never use if in higher-order function',
        },
        {
          selector: 'DoWhileStatement',
          message: 'Never use do-while',
        },
        {
          selector: 'ForInStatement',
          message: 'Never use for-in',
        },
        {
          selector: 'ForOfStatement',
          message: 'Never use for-of',
        },
        {
          selector: 'ForStatement',
          message: 'Never use for',
        },
        {
          selector: 'Identifier[name=/.+(Data|Info|Item|List|Manager)$/]',
          message: 'Not allowed to use \'Data\', \'Info\', \'Item\', \'List\', and \'Manager\' as suffix of identifier.',
        },
        {
          selector: 'IfStatement IfStatement',
          message: 'Never use nested-if including else-if',
        },
        {
          selector: 'SwitchStatement',
          message: 'Never use switch',
        },
        {
          selector: 'VariableDeclaration[kind=let]',
          message: 'Never use let',
        },
        {
          selector: 'WhileStatement',
          message: 'Never use while',
        },
      ],
      'no-return-assign': [
        'error',
        'except-parens',
      ],
      'no-return-await': [
        'error',
      ],
      'no-script-url': [
        'error',
      ],
      'no-self-assign': [
        'error',
        {
          props: true,
        },
      ],
      'no-self-compare': [
        'error',
      ],
      'no-sequences': [
        'error',
        {
          allowInParentheses: true,
        },
      ],
      'no-setter-return': [
        'error',
      ],
      'no-shadow': [
        'error',
        {
          builtinGlobals: true,
          hoist: 'all',
          ignoreOnInitialization: true,
          allow: [
            'it',
            'length',
            'name',
            'status',
            'target',
          ],
        },
      ],
      'no-shadow-restricted-names': [
        'error',
      ],
      'no-sparse-arrays': [
        'error',
      ],
      'no-tabs': [
        'error',
        {
          allowIndentationTabs: false,
        },
      ],
      'no-template-curly-in-string': [
        'error',
      ],
      'no-ternary': [
        'off', // 'error'
      ],
      'no-this-before-super': [
        'error',
      ],
      'no-throw-literal': [
        'error',
      ],
      'no-trailing-spaces': [
        'error',
        {
          skipBlankLines: false,
          ignoreComments: false,
        },
      ],
      'no-undef': [
        'error',
        {
          typeof: false,
        },
      ],
      'no-undef-init': [
        'error',
      ],
      'no-undefined': [
        'off', // 'error'
      ],
      'no-underscore-dangle': [
        'off', // 'error'
        {
          allow: [],
          allowAfterThis: false,
          allowAfterSuper: false,
          allowAfterThisConstructor: false,
          enforceInMethodNames: false,
          enforceInClassFields: false,
          allowFunctionParams: true,
          allowInArrayDestructuring: true,
          allowInObjectDestructuring: true,
        },
      ],
      'no-unexpected-multiline': [
        'error',
      ],
      'no-unmodified-loop-condition': [
        'error',
      ],
      'no-unneeded-ternary': [
        'error',
        {
          defaultAssignment: false,
        },
      ],
      'no-unreachable': [
        'error',
      ],
      'no-unreachable-loop': [
        'error',
      ],
      'no-unsafe-finally': [
        'error',
      ],
      'no-unsafe-negation': [
        'error',
        {
          enforceForOrderingRelations: false,
        },
      ],
      'no-unsafe-optional-chaining': [
        'error',
        {
          disallowArithmeticOperators: true,
        },
      ],
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
          enforceForJSX: false,
        },
      ],
      'no-unused-labels': [
        'error',
      ],
      'no-unused-private-class-members': [
        'error',
      ],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          destructuredArrayIgnorePattern: '^_',
        },
      ],
      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
          allowNamedExports: false,
        },
      ],
      'no-useless-backreference': [
        'error',
      ],
      'no-useless-call': [
        'error',
      ],
      'no-useless-catch': [
        'error',
      ],
      'no-useless-computed-key': [
        'error',
        {
          enforceForClassMembers: false,
        },
      ],
      'no-useless-concat': [
        'error',
      ],
      'no-useless-constructor': [
        'error',
      ],
      'no-useless-escape': [
        'error',
      ],
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      'no-useless-return': [
        'error',
      ],
      'no-var': [
        'error',
      ],
      'no-void': [
        'error',
        {
          allowAsStatement: false,
        },
      ],
      'no-warning-comments': [
        'off', // 'error'
        {
          terms: [
            'todo',
            'fixme',
            'xxx',
          ],
          location: 'start',
        },
      ],
      'no-whitespace-before-property': [
        'error',
      ],
      'no-with': [
        'error',
      ],
      'nonblock-statement-body-position': [
        'error',
        'beside',
        {
          overrides: {},
        },
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            consistent: true,
            multiline: false,
          },
          ObjectPattern: {
            consistent: true,
            multiline: false,
          },
          ImportDeclaration: {
            consistent: true,
            multiline: false,
          },
          ExportDeclaration: {
            consistent: true,
            multiline: false,
          },
        },
      ],
      'object-curly-spacing': [
        'error',
        'always',
        {
          arraysInObjects: true,
          objectsInObjects: true,
        },
      ],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: false,
          ignoreConstructors: false,
          avoidExplicitReturnArrows: false,
        },
      ],
      'one-var': [
        'error',
        'never',
      ],
      'one-var-declaration-per-line': [
        'error',
        'initializations',
      ],
      'operator-assignment': [
        'error',
        'always',
      ],
      'operator-linebreak': [
        'error',
        'before',
        {
          overrides: {
            '=': 'after',
            '+=': 'after',
            '-=': 'after',
            '*=': 'after',
            '/=': 'after',
            '%=': 'after',
            '**=': 'after',
            '<<=': 'after',
            '>>=': 'after',
            '>>>=': 'after',
            '&=': 'after',
            '|=': 'after',
            '^=': 'after',
          },
        },
      ],
      'padded-blocks': [
        'error',
        'never',
        {
          allowSingleLineBlocks: false,
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: [
            'block',
            'break',
            'class',
            'continue',
            'function',
            'return',
            'throw',
            'try',
          ],
        },
      ],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'prefer-exponentiation-operator': [
        'error',
      ],
      'prefer-named-capture-group': [
        'off', // 'error'
      ],
      'prefer-numeric-literals': [
        'error',
      ],
      'prefer-object-has-own': [
        'error',
      ],
      'prefer-object-spread': [
        'error',
      ],
      'prefer-promise-reject-errors': [
        'error',
        {
          allowEmptyReject: false,
        },
      ],
      'prefer-regex-literals': [
        'error',
        {
          disallowRedundantWrapping: false,
        },
      ],
      'prefer-rest-params': [
        'error',
      ],
      'prefer-spread': [
        'error',
      ],
      'prefer-template': [
        'error',
      ],
      'quote-props': [
        'error',
        'as-needed',
        {
          keywords: false,
          unnecessary: true,
          numbers: false,
        },
      ],
      radix: [
        'error',
        'as-needed',
      ],
      'require-atomic-updates': [
        'error',
        {
          allowProperties: false,
        },
      ],
      'require-await': [
        'off', // 'error'
      ],
      'require-unicode-regexp': [
        'error',
      ],
      'require-yield': [
        'error',
      ],
      'rest-spread-spacing': [
        'error',
        'never',
      ],
      'semi-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'semi-style': [
        'error',
        'first',
      ],
      'sort-imports': [
        'off', // 'error'
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: [
            'none',
            'all',
            'multiple',
            'single',
          ],
          allowSeparatedGroups: false,
        },
      ],
      'sort-keys': [
        'off', // 'error'
        'asc',
        {
          caseSensitive: true,
          minKeys: 2,
          natural: false,
          allowLineSeparatedGroups: false,
        },
      ],
      'sort-vars': [
        'off', // 'error'
        {
          ignoreCase: false,
        },
      ],
      'space-before-blocks': [
        'error',
        {
          functions: 'always',
          keywords: 'always',
          classes: 'always',
        },
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'always',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': [
        'error',
        'never',
      ],
      'space-infix-ops': [
        'error',
        {
          int32Hint: false,
        },
      ],
      'space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
          overrides: {},
        },
      ],
      'spaced-comment': [
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
          },
          block: {
            exceptions: [
              '*',
            ],
            balanced: true,
          },
        },
      ],
      strict: [
        'error',
        'safe',
      ],
      'switch-colon-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'symbol-description': [
        'error',
      ],
      'template-curly-spacing': [
        'error',
        'never',
      ],
      'template-tag-spacing': [
        'error',
        'always',
      ],
      'unicode-bom': [
        'error',
        'never',
      ],
      'use-isnan': [
        'error',
        {
          enforceForSwitchCase: true,
          enforceForIndexOf: true,
        },
      ],
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: false,
        },
      ],
      'vars-on-top': [
        'error',
      ],
      'wrap-iife': [
        'error',
        'inside',
        {
          functionPrototypeMethods: true,
        },
      ],
      'wrap-regex': [
        'off',
      ],
      'yield-star-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      yoda: [
        'error',
        'never',
      ],
    },
  },
  {
    ...jestPlugin,

    rules: {
      ...jestPlugin.rules,

      'jest/consistent-test-it': [
        'error',
        {
          fn: 'test',
          withinDescribe: 'test', // 'it'
        },
      ],

      /*
       * These rules require type information, which is not generated for the
       * plain JavaScript sources of this repository.
       */
      'jest/no-error-equal': [
        'off', // 'error'
      ],
      'jest/no-hooks': [
        'off', // 'error'
        {
          allow: [],
        },
      ],
      'jest/no-identical-title': [
        'off', // 'error'
      ],
      'jest/no-unnecessary-assertion': [
        'off', // 'error'
      ],
      'jest/prefer-expect-assertions': [
        'off', // 'error'
        {
          onlyFunctionsWithAsyncKeyword: false,
          onlyFunctionsWithExpectInLoop: false,
          onlyFunctionsWithExpectInCallback: false,
        },
      ],

      /*
       * Enabling this rule requires importing the Jest functions from
       * '@jest/globals', which is not declared as a dependency here.
       */
      'jest/prefer-importing-jest-globals': [
        'off', // 'error'
        {
          types: [
            'hook',
            'describe',
            'test',
            'expect',
            'jest',
            'unknown',
          ],
        },
      ],
      'jest/prefer-lowercase-title': [
        'off', // 'error'
        {
          ignore: [],
          allowedPrefixes: [],
          ignoreTopLevelDescribe: true, // false
          ignoreTodos: false,
        },
      ],
      'jest/prefer-strict-equal': [
        'off', // 'error'
      ],
      'jest/require-hook': [
        'off', // 'error'
        {
          allowedFunctionCalls: [],
        },
      ],
      'jest/valid-expect-with-promise': [
        'off', // 'error'
        {
          checkThenables: false,
        },
      ],
    },
  },
  {
    ...jsdocPlugin.configs['flat/recommended-error'],

    rules: {
      ...jsdocPlugin.configs['flat/recommended-error'].rules,

      'jsdoc/require-param-description': [
        'off', // 'error'
        {
          defaultDestructuredRootDescription: 'The root object',
          setDefaultDestructuredRootDescription: false,
        },
      ],
      'jsdoc/require-returns-description': [
        'off', // 'error'
      ],
      'jsdoc/tag-lines': [
        'error',
        'never',
        {
          count: 1,
          maxBlockLines: null,
          startLines: 1, // 0
          // startLinesWithNoTags: null,
          /*
           * The default is null, but the schema accepts a number only.
           * Therefore, we cannot give the default explicitly here.
           */
          endLines: 0,
          applyToEndTag: true,
          tags: {},
        },
      ],
    },
  },
  {
    plugins: {
      openreachtech: openreachtechPlugin,
    },
    rules: {
      'openreachtech/empty-line-after-super': [
        'error',
      ],
      'openreachtech/indent-in-infix-expression': [
        'error',
      ],
      'openreachtech/newline-per-parameter': [
        'error',
      ],
      'openreachtech/no-if-in-oneline': [
        'error',
      ],
      'openreachtech/no-unexpected-multiline': [
        'error',
      ],
    },
  },
]
