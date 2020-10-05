const findPair = require('./find-pair')
// example:
// Input:
// arr = [8, 7, 2, 5, 3, 1]
// sum = 10
// Output:
// Pair found at index 0 and 2 (8 + 2)
// or
// Pair found at index 1 and 4 ( 7 + 3)



describe('findPair()', () => {
  const arr = [8, 7, 2, 5, 3, 1]
  it('returns the indexes of the values that equal the given sum', () => {
    expect(findPair(arr, 10)).toEqual([0, 2])
  })
})