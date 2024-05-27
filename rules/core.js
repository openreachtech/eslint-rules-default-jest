'use strict'

const js = require('@eslint/js')

module.exports = {
  rules: {
    ...js.configs
      .all
      .rules,

    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false,
      },
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'block-scoped-var': [
      'error',
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
      'error',
      'always',
      {
        ignoreInlineComments: false,
        ignoreConsecutiveComments: false,
        ignorePattern: '',
      },
    ],
    'class-methods-use-this': [
      'error',
      {
        enforceForClassFields: true,
        exceptMethods: [],
      },
    ],
    complexity: [
      'error',
      {
        max: 20,
      },
    ],
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: false,
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
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPattern: '',
      },
    ],
    eqeqeq: [
      'error',
      'always',
    ],
    'for-direction': [
      'error',
    ],
    'func-name-matching': [
      'error',
      'always',
    ],
    'func-names': [
      'error',
      'always',
    ],
    'func-style': [
      'error',
      'expression',
      {
        allowArrowFunctions: false,
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
      'anyOrder',
    ],
    'guard-for-in': [
      'error',
    ],
    'id-denylist': [
      'error',
    ],
    'id-length': [
      'error',
      {
        min: 2,
        max: Infinity,
        properties: 'always',
        exceptions: [],
        exceptionPatterns: [],
      },
    ],
    'id-match': [
      'error',
      '^.+$',
      {
        properties: false,
        classFields: false,
        onlyDeclarations: false,
        ignoreDestructuring: false,
      },
    ],
    'init-declarations': [
      'error',
      'always',
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
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
        ignoreExpressions: false,
      },
    ],
    'max-depth': [
      'error',
      4,
    ],
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: false,
        skipComments: false,
      },
    ],
    'max-lines-per-function': [
      'error',
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
      3,
    ],
    'max-statements': [
      'error',
      10,
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        newIsCapExceptions: [],
        capIsNewExceptions: [],
        properties: true,
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
      'error',
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
    'no-console': [
      'error',
      {
        allow: [],
      },
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
      'error',
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
        allow: [],
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
        enforceForLogicalOperands: false,
      },
    ],
    'no-extra-label': [
      'error',
    ],
    'no-fallthrough': [
      'error',
      {
        allowEmptyCase: true,
        commentPattern: '',
      },
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
        disallowTemplateShorthand: false,
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
      'error',
      {
        ignorePattern: '',
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
        skipJSXText: false,
        skipRegExps: false,
        skipStrings: true,
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
      'error',
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
      'error',
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
    'no-multi-assign': [
      'error',
      {
        ignoreNonDeclaration: false,
      },
    ],
    'no-multi-str': [
      'error',
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
        props: false,
        ignorePropertyModificationsFor: [],
        ignorePropertyModificationsForRegex: [],
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
      {
        restrictedNamedExports: [],
        restrictedNamedExportsPattern: '',
        restrictDefaultExports: {
          direct: false,
          named: false,
          defaultFrom: false,
          namedFrom: false,
          namespaceFrom: false,
        },
      },
    ],
    'no-restricted-globals': [
      'error',
      // There are 0 or more rest parameters in the array
      // string | { name: string, message: string }
    ],
    'no-restricted-imports': [
      'error',
      // There are 0 or more rest parameters in the array
      // string | { name: string, message: string }
    ],
    'no-restricted-properties': [
      'error',
      // There are 0 or more rest parameters in the array
      // { object?: string, property: string, message?: string }
    ],
    'no-restricted-syntax': [
      'error',
      // There are 0 or more rest parameters in the array
      // string | { selector: string, message: string }
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
        builtinGlobals: false,
        hoist: 'functions',
        ignoreOnInitialization: false,
        allow: [],
      },
    ],
    'no-shadow-restricted-names': [
      'error',
    ],
    'no-sparse-arrays': [
      'error',
    ],
    'no-template-curly-in-string': [
      'error',
    ],
    'no-ternary': [
      'error',
    ],
    'no-this-before-super': [
      'error',
    ],
    'no-throw-literal': [
      'error',
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
      'error',
    ],
    'no-underscore-dangle': [
      'error',
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
        defaultAssignment: true,
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
        disallowArithmeticOperators: false,
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
        varsIgnorePattern: '',
        args: 'after-used',
        argsIgnorePattern: '',
        caughtErrors: 'none',
        caughtErrorsIgnorePattern: '',
        ignoreRestSiblings: false,
        destructuredArrayIgnorePattern: '',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: true,
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
    'no-with': [
      'error',
    ],
    'one-var': [
      'error',
      'always',
    ],
    'no-warning-comments': [
      'error',
      {
        terms: [
          'todo',
          'fixme',
          'xxx',
        ],
        location: 'start',
        decoration: [],
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: false,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false,
        methodsIgnorePattern: '',
      },
    ],
    'operator-assignment': [
      'error',
      'always',
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
      'error',
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
    radix: [
      'error',
      'always',
    ],
    'require-atomic-updates': [
      'error',
      {
        allowProperties: false,
      },
    ],
    'require-await': [
      'error',
    ],
    'require-unicode-regexp': [
      'error',
    ],
    'require-yield': [
      'error',
    ],
    'sort-imports': [
      'error',
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
      'error',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
        allowLineSeparatedGroups: false,
      },
    ],
    'sort-vars': [
      'error',
      {
        ignoreCase: false,
      },
    ],
    strict: [
      'error',
      'safe',
    ],
    'symbol-description': [
      'error',
    ],
    'unicode-bom': [
      'error',
      'never',
    ],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: false,
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
    yoda: [
      'error',
      'never',
    ],
  },
}
