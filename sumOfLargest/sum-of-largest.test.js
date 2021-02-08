const sumOfLargest = require('./sum-of-largest');

describe('subOfLargest()', () => {
  it('returns the sum of the 2 largest numbers in an array of integers', () => {
    const integers = [5, 1, 4, 8]
    expect(sumOfLargest(integers)).toEqual(13);
  })
})