import {
  ESLint,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default-jest' {
  const config: ESLint.ConfigData<ESLint.LintOptions>

  export = config
}
