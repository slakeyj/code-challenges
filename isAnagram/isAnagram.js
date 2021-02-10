const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const letterCount = {};
  const letters = s.split('');
  for (let i = 0; i < letters.length; i++) {
    letterCount[letters[i]] = letterCount[letters[i]] + 1 || 1;
  }

  for (let j = 0; j < t.length; j++) {
    const tLetterInCount = letterCount[t.charAt(j)];
    if (!tLetterInCount || tLetterInCount === 0) {
      return false;
    }
    letterCount[t.charAt(j)]--;
  }
  return true;
};

module.exports = isAnagram;
