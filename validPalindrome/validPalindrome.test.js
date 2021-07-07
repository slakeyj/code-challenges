const validPalindrome = require('./validPalindrome');

describe('validPalindrome', () => {
  it('returns true if the string is the same forward and backward', () => {
    expect(validPalindrome('aba')).toBe(true);
  });

  it('returns true if the string is the same foward and backward after removing one letter', () => {
    expect(validPalindrome('abca')).toBe(true);
  });

  it('returns false if it is not the same foward and backward', () => {
    expect(validPalindrome('abbbbddd')).toBe(false);
  });
});
