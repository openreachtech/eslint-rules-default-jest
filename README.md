# eslint-rules-default-jest

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

This package provides ESLint Jest plugin rules with default options.

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
  @openreachtech/eslint-rules-default-jest
```

### Configuring

In your `eslint.config.js` file, import `@openreachtech/eslint-rules-default-jest` and include the all rules to use it:

```js
// eslint.config.js
import jestPlugin from '@openreachtech/eslint-rules-default-jest'

export default [
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
      'jest/prefer-lowercase-title': [
        'error',
        {
          ignore: [],
          allowedPrefixes: [],
          ignoreTopLevelDescribe: false, // true
        },
      ],

      ...
    },
  },
]
```

## Track of Changes with Line Comments

When overwriting default values ​​in each ESLint Config package, we recommend leaving the default values ​​as line comments.

```js
// eslint.config.js
import jestPlugin from '@openreachtech/eslint-rules-default-jest'

export default [
  {
    ...jestPlugin,

    rules: {
      ...jestPlugin.rules,

      'jest/consistent-test-it': [
        'error',
        {
          fn: 'test',
          withinDescribe: 'test', // 'it' <--- ✅
        },
      ],
      'jest/prefer-lowercase-title': [
        'error',
        {
          ignore: [],
          allowedPrefixes: [],
          ignoreTopLevelDescribe: false, // true <--- ✅
        },
      ],

      ...
    },
  },
]
```

## License

This project is released under the MIT License.

See → [LICENSE](./LICENSE)

## Contributing

We welcome bug reports, feature requests, and ruleset contributions.

Please feel free to contact us through GitHub Issues or Pull Requests.

We strive to meet user expectations and your contributions are highly appreciated!

```sh
% git clone https://github.com/openreachtech/eslint-rules-default-jest.git
% cd eslint-rules-default-jest
% npm install
% npm run lint
% npm test
```

## Authors

* [Open Reach Tech inc.](https://openreach.tech)
