const arrayShift = require('./arrayShift')

describe('arrayShift()', () => {
  it('returns an array of 1 value when inserting into an empty array', () => {
    expect(arrayShift([], 1)).toEqual([1])
  })
  it('inserts the number at the end if the array is a length of 1', () => {
    expect(arrayShift([1], 2)).toEqual([1, 2])
  })
  it('inserts the number into the middle of an array greater than 1', () => {
    expect(arrayShift([1, 3], 2)).toEqual([1, 2, 3]);
    expect(arrayShift([1, 2, 4], 3)).toEqual([1, 2, 3, 4])
    expect(arrayShift([1, 2, 3, 4, 5, 7, 8, 9, 10], 6)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})