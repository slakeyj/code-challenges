const isUgly = require('./uglyNumber');


describe('isUgly()', () => {
  it.each([
    [true, 6],
    [true, 8],
    [false, 14],
    [true, 1],
    [false, -2147483648],
    [false, 7]
  ])('returns %s when given %i', (bool, input) => {
    expect(isUgly(input)).toBe(bool);
  })
})