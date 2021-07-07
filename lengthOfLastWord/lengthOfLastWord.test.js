const lengthOfLastWord = require('./lengthOfLastWord');

describe('lengthOfLastWord()', () => {
  it('returns 0 if there is no last word', () => {
    const string = ' ';
    expect(lengthOfLastWord(string)).toEqual(0);
  });

  it('returns the length of the last word if there is one present', () => {
    const stringOne = 'Hello World';
    const stringTwo = 'a ';
    expect(lengthOfLastWord(stringOne)).toEqual(5);
    expect(lengthOfLastWord(stringTwo)).toEqual(1);
  });
});
