const sumEvenFibs = require('./sumEvenFibs');

describe('sumEvenFibs', () => {
  it.each([
    [10, 25],
    [44, 50]
  ])('returns %s for %s', (expected, max) => {
    expect(sumEvenFibs(max)).toEqual(expected);
  })
});