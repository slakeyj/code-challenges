const sumOfTwoLargest = require('./sum-of-two-largest');

describe('sumOfTwoLargest()', () => {
  it('should return 0 if the array is empty', () => {
    expect(sumOfTwoLargest([])).toEqual(0);
  })
  it('should return the number if the array contains only one number', () => {
    expect(sumOfTwoLargest([4])).toEqual(4);
  })
  it('should return the sum of both numbers if the array has 2 values in it', () => {
    expect(sumOfTwoLargest([2, 3])).toEqual(5);
  })
  it('should return the sum of the two largest numbers in an array', () => {
    expect(sumOfTwoLargest([1, 2, 3])).toEqual(5);
  })
})