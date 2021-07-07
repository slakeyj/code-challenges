const lengthOfLastWord = string => {
  const words = string.split(' ');
  for (let i = words.length - 1; i >= 0; i--) {
    console.log('i: ', i);
    if (words[i] === '') {
      continue;
    } else {
      return words[i].length;
    }
  }
  return 0;
};

module.exports = lengthOfLastWord;
