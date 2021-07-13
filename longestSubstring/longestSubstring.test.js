const lengthOfLongestSubstring = require('./longestSubstring')

describe('lengthOfLongestSubstring', () => {
  it('returns the length of the longest substring without a repeating character', () => {
    //expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    // expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    // expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    // expect(lengthOfLongestSubstring('au')).toEqual(2)
  })
  it('returns the correct length for a non-consecutive repeating character', () => {
    expect(lengthOfLongestSubstring('dvdf')).toEqual(3);
  })
  it('returns 0 if the string is empty', () => {
    expect(lengthOfLongestSubstring('')).toEqual(0)
  })
})