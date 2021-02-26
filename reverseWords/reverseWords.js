const reverseWords = string => {
  const words = string.split(' ');
  const wordsReversed = words.map(word => word.split('').reverse().join(''));
  return wordsReversed.join(' ');
};

module.exports = reverseWords;
