import extractUniqueIds from '../../tools/extractUniqueIds.js'

describe('extractUniqueIds()', () => {
  describe('should extract the unique ids', () => {
    const cases = [
      {
        input: {
          values: [
            { id: 'value-0001' },
            { id: 'value-0002' },
          ],
        },
        expected: [
          'value-0001',
          'value-0002',
        ],
      },
      {
        input: {
          values: [
            { id: 'value-0003' },
            { id: 'value-0004' },
            { id: 'value-0003' },
          ],
        },
        expected: [
          'value-0003',
          'value-0004',
        ],
      },
      {
        input: {
          values: [
            { id: 'value-0005' },
            { id: 'value-0005' },
            { id: 'value-0005' },
          ],
        },
        expected: [
          'value-0005',
        ],
      },
    ]

    test.each(cases)('id: $input.values.0.id', ({ input, expected }) => {
      const received = extractUniqueIds(input)

      expect(received)
        .toEqual(expected)
    })
  })

  describe('when the values are empty', () => {
    test('should extract no id', () => {
      const received = extractUniqueIds({ values: [] })

      expect(received)
        .toEqual([])
    })
  })
})
