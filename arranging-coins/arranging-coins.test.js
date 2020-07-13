const arrangeCoins = require('./arranging-coins');


describe('arrangeCoins()', () => {
  it('returns the correct number of rows', () => {
    expect(arrangeCoins(5)).toEqual(2);
    expect(arrangeCoins(8)).toEqual(3);
  })


})