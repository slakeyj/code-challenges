const countPrimes = require('./countPrimes');

describe('countPrimes', () => {
  it.each([
    [4, 10],
    [0, 0],
    [0, 1],
    [1, 3],
    [5, 13],
  ])('returns %i when given %i', (expected, input) => {
    expect(countPrimes(input)).toEqual(expected);
  });
});
