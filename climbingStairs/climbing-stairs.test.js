const climbStairs = require('./climbing-stairs');

describe('climbStairs', () => {
  it('should return the correct number in the fibonacci sequence', () => {
    expect(climbStairs(1)).toEqual(1);
    expect(climbStairs(2)).toEqual(2);
    expect(climbStairs(3)).toEqual(3);
    expect(climbStairs(6)).toEqual(13);
  })
})