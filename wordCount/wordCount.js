// wordCount('mary had a little lamb') === 5

const assertEquals = (expected, actual) => {
  if (expected !== actual) {
    console.error(`BOOM! was ${actual}, expected ${expected}`)
  } else {
    console.log(`yay! ${actual}`)
  }
}

const aCode = 'a'.charCodeAt(0);
const zCode = 'z'.charCodeAt(0);

const isLetter = character => {
  // const hereCode = character.toLowerCase().charCodeAt(0);
  // return aCode <= hereCode && hereCode <= zCode;
  return !!character.match(/[a-zA-Z]/)
}

const wordCount = str => {
  let count = 0;

  for (let i = 1; i < str.length; i++) {
    const previousCharacter = str[i - 1];
    const currentCharacter = str[i]
    if (isLetter(previousCharacter) && !isLetter(currentCharacter)) {
      count += 1
    }
    if (i === str.length - 1 && isLetter(currentCharacter)) {
      count++;
    }
  }
  return count;
}

assertEquals(5, wordCount('mary had a little lamb'))
assertEquals(5, wordCount(' mary had a little lamb'))
assertEquals(5, wordCount("mary \t had a little lamb"))
assertEquals(5, wordCount("mary \t\t had a little lamb"))
assertEquals(5, wordCount("mary \t\t\t\t\t\t\t\t\t\t\t\t\t had a little lamb"))
assertEquals(5, wordCount("mary;;had; a, little lamb."))

