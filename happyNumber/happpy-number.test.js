const isHappy = require('./happy-number')

describe('happyNumber()', () => {
  it('returns true if we arrive at 1', () => {
    expect(isHappy(19)).toBeTruthy()
  })
  it('returns false if we never arrive at 1', () => {
    expect(isHappy(2)).toBeFalsy();
  })
})