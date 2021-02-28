const wordPattern = require('./wordPattern');

describe('wordPattern', () => {
  it.each([
    [true, 'abba', 'dog cat cat dog'],
    [false, 'abba', 'dog cat cat fish'],
    [false, 'aaaa', 'dog cat cat dog'],
    [false, 'abba', 'dog dog dog dog'],
    [false, 'aaaa', 'dog dog dog dog dog'],
  ])(
    'returns %s for pattern "%s" and input "%s"',
    (expected, pattern, input) => {
      expect(wordPattern(pattern, input)).toBe(expected);
    }
  );
});
