const isPalindrome = require('./palindrome-number')

describe('isPalindrome()', () => {
  it('returns true for a positive palindrome number', () => {
    expect(isPalindrome(121)).toEqual(true);
  })
  it('returns false for negative numbers', () => {
    expect(isPalindrome(-121)).toEqual(false);
  })
  it('returns false for positive non-palindrome numbers', () => {
    expect(isPalindrome(10)).toEqual(false);
  })
})