const equalsZero = require('./equals-zero');

describe('equalsZero()', () => {
  it('should return true of 3 integers sum to 0', () => {
    const integers = [5, -2, 6, 1]
    expect(equalsZero(integers)).toBeTruthy();
  })
})