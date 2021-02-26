const reverseWords = require('./reverseWords');

describe('reverseWords', () => {
  it('reverses the string while maintaining whitespace', () => {
    expect(reverseWords("Let's take LeetCode contest")).toEqual(
      "s'teL ekat edoCteeL tsetnoc"
    );
  });
});
