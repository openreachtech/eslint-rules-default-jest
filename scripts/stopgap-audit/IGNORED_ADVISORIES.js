/**
 * Advisories `npm run audit:npm` lets through until the lockfile no longer reports them.
 *
 * @type {Array<{
 *   id: string
 *   package: string
 *   path: string
 *   reason: string
 *   removeWhen: string
 * }>}
 */
const IGNORED_ADVISORIES = [
  {
    id: 'GHSA-gcqx-w48m-w2h4',
    package: 'deepmerge',
    path: 'jest > @jest/core > jest-config > deepmerge',
    reason: 'No patched release: the advisory covers deepmerge >=4.2.0 <=4.3.1, and 4.3.1 is the latest. deepmerge is reached by jest-config alone, and jest is a devDependency of this package.',
    removeWhen: 'npm audit on this lockfile no longer reports GHSA-gcqx-w48m-w2h4',
  },
]

export default IGNORED_ADVISORIES
