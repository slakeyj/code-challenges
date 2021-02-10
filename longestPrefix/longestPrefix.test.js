const longestCommonPrefix = require('./longestPrefix');

describe('longestCommonPrefix()', () => {
  it('returns the longest prefix from an array of words', () => {
    const strs = ['flower', 'flow', 'flight'];
    expect(longestCommonPrefix(strs)).toEqual('fl');
  });
  it('returns an empty string if there is no common prefix', () => {
    const strs = ['dog', 'racecar', 'car'];
    expect(longestCommonPrefix(strs)).toEqual('');
  });
});
