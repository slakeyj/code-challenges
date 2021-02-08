const singleCharacter = string => {
  let tempCharacter = '';
  const characters = string.split('');
  for (let i = 0; i < characters.length; i++) {
    tempCharacter = characters[i];
    const findCharacters = characters.filter(character => character === tempCharacter);
    if (findCharacters.length === 1) {
      return tempCharacter;
    }
  }
}

module.exports = singleCharacter;