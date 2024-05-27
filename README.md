# eslint-rules-default

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

This package provides ESLint rules with default options.

If this package is used as a base ruleset in another ESLint config repository, all rules
are enabled by default. You must explicitly turn off each rule that you want to disable.

This package is only for Flat Config.

## Usage

### Installing

Please add the following line to your `.npmrc` file.

```
// .npmrc
@openreachtech:registry=https://npm.pkg.github.com
```

Install this package alongside ESLint v9 or greater:

```sh
npm install --save-dev \
  eslint \
  @openreachtech/eslint-rules-default
```

### Configuring

In your `eslint.config.js` file, import `@openreachtech/eslint-rules-default` and include the all rules to use it:

```js
// eslint.config.js
import ruleHash from '@openreachtech/eslint-rules-default'

export default [
  {
    rules: {
      ...ruleHash.core.rules,
      ...ruleHash.disableCoreStylistic.rules, // Not required after v10.

      indent: [
        'error',
        2, // 4
      ],
      quotes: [
        'error',
        'single', // 'double'
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      semi: [
        'error',
        'never', // 'always'
        {
          beforeStatementContinuationChars: 'never', // 'any'
        },
      ],

      ...
    },
  },
];
```

#### Advanced Configuration

This package also contains several rulesets for several plugin.

1. [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin)
2. [ESLint Jest plugin](https://www.npmjs.com/package/eslint-plugin-jest)
3. [ESLint JSDoc plugin](https://www.npmjs.com/package/eslint-plugin-jsdoc)

`@stylistic/eslint-plugin` rulesets included in this version are:

| ruleset | included |
|:--|:--:|
| eslint-plugin-js | ✅ |
| eslint-plugin-ts | ❌ |
| eslint-plugin-jsx | ❌ |
| eslint-plugin-plus | ✅ |

`ruleHash.stylistics` and `ruleHash.stylistic Jsx` will be added in the future, if there are many needs.

#### Frequently-Disabled Rules

Core rules of ESLint v9 includes stylistic-related rules.

When using `@stylistic/eslint-plugin` with ESLint v9, please disable stylistic-related rules in the core ruleset as follows:


```js
// eslint.config.js
import ruleHash from '@openreachtech/eslint-rules-default'

export default [
  // core rules
  {
    rules: {
      ...ruleHash.core.rules,
      ...ruleHash.disableCoreStylistic.rules,

      indent: [
        'error',
        2, // 4
      ],

      ...
    },
  },

  // @stylistic rules
  {
    ...ruleHash.stylisticJs,

    rules: [
      ...ruleHash.stylisticJs.rules,
      ...ruleHash.stylisticPlus.rules,

      '@stylistic/indent-binary-ops': [
        'error',
        4, // 2
      ],

      ...
    ],
  },
];
```

## Track of Changes with Line Comments

When overwriting default values ​​in each ESLint Config package, we recommend leaving the default values ​​as line comments.

```js
// eslint.config.js
import ruleHash from '@openreachtech/eslint-rules-default'

export default [
  {
    rules: {
      ...ruleHash.core.rules,
      ...ruleHash.disableCoreStylistic.rules,

      indent: [
        'error',
        2, // 4 <--- ✅
      ],
      quotes: [
        'error',
        'single', // 'double' <--- ✅
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      semi: [
        'error',
        'never', // 'always' <--- ✅
        {
          beforeStatementContinuationChars: 'never', // 'any' <--- ✅
        },
      ],
      ...
    },
  },
];
```

## License

This project is released under the MIT License.

See → [LICENSE](./LICENSE)

## Contributing

We welcome bug reports, feature requests, and ruleset contributions.

Please feel free to contact us through GitHub Issues or Pull Requests.

We strive to meet user expectations and your contributions are highly appreciated!

```sh
% git clone https://github.com/openreachtech/eslint-rules-default.git
% cd eslint-rules-default
% npm install
% npm test
```

## Authors

* [Open Reach Tech inc.](https://openreach.tech)
