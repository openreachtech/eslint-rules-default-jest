import {
  Linter,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default-jest' {
  const config: Linter.Config

  export default config
}
