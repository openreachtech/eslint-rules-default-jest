# eslint-rules-default-jest

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

此のパッケージは、ESLint Jest plugin の全ルールを明示されたディフォルトオプションと共に提供します。

他の ESLint 構成リポジトリの基本ルールセットとして使用すると、すべてのルールが機能します。無効にしたいルールは、各ルールを明示的にオフにする必要があります。

プラグインで deprecated となったルールは、エクスポートされるルールセットに含めません。そのため、ルール数はプラグイン本体より少なくなります。それらのディフォルトオプションは `rules/deprecated.js` に記録し、`deprecated` としてエクスポートします。2 つのルールセットを合わせるとプラグインの全ルールを網羅します。

此のパッケージは、Flat Config 専用です。

## Usage

### Installing

ESLint v9 以降と一緒に此のパッケージをインストールします。

```sh
npm install --save-dev \
  eslint \
  @openreachtech/eslint-rules-default-jest
```

### Configuring

`eslint.config.js` ファイルに、`@openreachtech/eslint-rules-default-jest` をインポートし、それを使用するためのすべてのルールを含めます。

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
          ignoreTopLevelDescribe: true, // false
          ignoreTodos: false,
        },
      ],

      ...
    },
  },
]
```

## Track of Changes with Line Comments

各 ESLint Config パッケージでディフォルトの値を上書きする時は、ディフォルトの値をラインコメントで残しておく方法がお薦めです。

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
          ignoreTopLevelDescribe: true, // false <--- ✅
          ignoreTodos: false,
        },
      ],

      ...
    },
  },
]
```

## License

このプロジェクトは Apache License 2.0 に基づいてリリースされています。

此方をご覧ください → [LICENSE](./LICENSE)

## Contributing

バグレポート、機能リクエスト、ルールセットの貢献を歓迎します。

GitHub Issues または Pull Request を通じてお気軽にご提案ください。

私たちはユーザーの期待に応えるよう活動しており、貢献を高く評価します。

```sh
% git clone https://github.com/openreachtech/eslint-rules-default-jest.git
% cd eslint-rules-default-jest
% npm install
% npm run lint
% npm test
```

## Authors

* [Open Reach Tech株式会社](https://openreach.tech)
