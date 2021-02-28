// create an object lining up the letter with corresponding word:
/* 

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

wordPattern = {
  'a': 'dog',
  'b': 'cat"
}

- lookup to see if letter already exists in object
- if it does, look up it's value
    - if value matches current word you're looking at, continue
    - if not, return false
- if letter doesn't already exist in object, add it with the corresponding word as its value

- create empty object
- iterate over pattern
- see if current letter exists in object
- if it doesn't, add it
- if it does, lookup corresponding value to see if it matches corresponding word in string
- if it doesn't, return false
- if get to end of iteration without returning false, return true
*/

// "abba", s = "dog cat cat fish"
/*
letterToWord = {


}
*/
const wordPattern = (pattern, s) => {
  const wordToLetter = {};
  const letterToWord = {};
  const words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    const currentLetter = pattern[i];
    const currentWord = words[i];

    wordToLetter[currentWord] = wordToLetter[currentWord] || currentLetter;
    letterToWord[currentLetter] = letterToWord[currentLetter] || currentWord;

    const mappedLetter = wordToLetter[currentWord];
    const mappedWord = letterToWord[currentLetter];

    if (mappedLetter !== currentLetter || mappedWord !== currentWord) {
      return false;
    }
  }
  return true;
};

module.exports = wordPattern;
