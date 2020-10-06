const zeroSum = require('./zero-sum');

describe('zeroSum()', () => {

  it('returns a list of all sub-arrays that sum to zero', () => {
    const array = [4, 2, -3, -1, 0, 4];
    const subArrays = [
      [-3, -1, 0, 4],
      [0]
    ]
    expect(zeroSum(array)).toEqual(subArrays);
  })
})