const mostCommonWord = require('./most-common-word');

describe('mostCommonWord()', () => {
  const phrase = "Bob hit a ball, the hit BALL flew far after it was hit."
  const bannedList = ["hit"]
  it('returns the most common word that isn\'t banned', () => {
    expect(mostCommonWord(phrase, bannedList)).toBe("ball")
  })
})