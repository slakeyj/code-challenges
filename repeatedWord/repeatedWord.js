//  Given a string of words, return the first repeating word in the sentence

const repeatedWord = string => {
  const words = [...string.split(' ')]
  const wordMap = new Map();
  if (!string.length) {
    return string;
  }

  if (words.length === 1) {
    return words[0];
  }

  for (let i = 0; i < words.length; i++) {
    if (wordMap.has(words[i].toLowerCase())) {
      return words[i];
    }
    wordMap.set(words[i].toLowerCase(), 1)
  }

}

module.exports = repeatedWord;