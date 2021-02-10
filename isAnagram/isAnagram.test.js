const isAnagram = require('./isAnagram');

describe('isAnagram()', () => {
  it('returns false if the two strings are not anagrams', () => {
    expect(isAnagram('cat', 'abc')).toBe(false);
  });
  it('returns true when the two strings are anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });
});
