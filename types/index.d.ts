import {
  Linter,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default-jest' {
  const config: Linter.Config
  const deprecated: Linter.Config

  export default config

  export {
    deprecated,
  }
}
