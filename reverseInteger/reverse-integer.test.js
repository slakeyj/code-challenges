const reverseInteger = require('./reverse-integer')

describe('reverseInteger()', () => {
  it('reverses a positive integer', () => {
    expect(reverseInteger(123)).toEqual(321);
  })

  it('reverses a negative integer', () => {
    expect(reverseInteger(-123)).toEqual(-321);
  })

  it('removes a leading 0', () => {
    expect(reverseInteger(120)).toEqual(21);
  })

  it('returns 0 when a number is not within the correct range', () => {
    expect(reverseInteger(Math.pow(-2, 33))).toEqual(0);
    expect(reverseInteger(Math.pow(2, 33))).toEqual(0);
  })
})