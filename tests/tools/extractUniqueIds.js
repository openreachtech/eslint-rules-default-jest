/**
 * Extract the unique ids from the given values.
 *
 * @param {{values: Array<{id: string}>}} params - The values holding an id each.
 * @returns {Array<string>} The ids, with every duplicate dropped.
 */
export default function extractUniqueIds ({
  values,
}) {
  const ids = values.map(value => value.id)

  return [
    ...new Set(ids),
  ]
}
