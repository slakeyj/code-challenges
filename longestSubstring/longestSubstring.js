const lengthOfLongestSubstring = string => {
  if (string === '') {
    return 0;
  }

  // 'abcabcbb'
  let stringOne = string[0]
  // stringOne = 'b'
  // string = ['abc', 'bca', 'cab', 'abc', 'bc', ']
  // newIndex = 0
  // i = 6
  const strings = [];
  for (let i  = 1; i < string.length; i++) {
    if (stringOne.includes(string[i])) {
      strings.push(stringOne);
      let newIndex = string.indexOf(string[i]) 
      console.log('newIndex: ', newIndex)     
      i = newIndex + 1;
      stringOne = string[i];
    } else {
      stringOne += string[i];
    }
  }
  strings.push(stringOne)
  const longest = strings.reduce((a ,b) =>  a.length >= b.length? a : b);
  return longest.length
}

module.exports = lengthOfLongestSubstring;