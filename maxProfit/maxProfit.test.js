const maxProfit = require('./maxProfit');

describe('maxProfit', () => {
  it.each([
    [7, [7, 1, 5, 3, 6, 4]],
    [4, [1, 2, 3, 4, 5]],
    [0, [7, 6, 4, 3, 1]],
  ])('returns %i when given %j', (expectedValue, input) => {
    expect(maxProfit(input)).toEqual(expectedValue);
  });
});
