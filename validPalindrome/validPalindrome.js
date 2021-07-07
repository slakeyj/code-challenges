const validPalindrome = string => {
  if (string === string.split('').reverse().join('')) {
    return true;
  }

  const letters = string.split('');

  for (let i = 0; i < letters.length; i++) {
    const newLetters = [...letters];
    newLetters.splice(i, 1);
    const normalString = newLetters.join('');
    const reversedString = newLetters.reverse().join('');
    if (normalString === reversedString) {
      return true;
    }
  }
  return false;
};

module.exports = validPalindrome;
