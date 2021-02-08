const singleCharacter = require('./single-character');

describe('singleCharacter', () => {
  it('returns the first character to only appear once in a string', () => {
    expect(singleCharacter('ABACCDEFF')).toEqual('B')
  })
})