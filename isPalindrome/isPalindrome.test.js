const isPalindrome = require('./isPalindrome')

describe('isPalindrome', () => {
  it.each([
    [true, 'racecar'],
    [false, 'foobar'],
    [false, 'blah'],
    [true, 'kayak'],
    [true, 'naan']
  ])('returns %s for %s', (expected, str) => {
    expect(isPalindrome(str)).toEqual(expected);
  })
});
