const repeatedWord = require('./repeatedWord')

describe('repeatedWord()', () => {
  it('returns an empty string when given an empty string', () => {
    expect(repeatedWord('')).toEqual('')
  })
  it('returns the word of a string with a single word', () => {
    expect(repeatedWord('hi')).toEqual('hi')
  })

  it('returns the first word that is repeated twice', () => {
    const words = 'Once upon a time, there was a brave princess who...';
    const moreWords = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'
    expect(repeatedWord(words)).toEqual('a')
    expect(repeatedWord(moreWords)).toEqual('it');
  })
})