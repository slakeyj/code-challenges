// const strs = ['flower', 'flow', 'flight'];

/*
prefix = 'flower'

prefix.startsWith('flow')?
prefix = 'flow'
while (!prefix.startsWith(str)), call substring function on str
prefix.startsWith('flight') 
str = str.substring(0, str.length - 1)?
prefix.StartsWith('fligh')
str.substring(0, str.length - 1)?
prefix.StartsWith('flig')
str.substring(0, str.length - 1)?
prefix.StartsWith('fli')
str.substring(0, str.length - 1)?
prefix.StartsWith('fl')
prefix = 'fl'
*/

const getSubstring = string => string.substring(0, string.length - 1);

const longestCommonPrefix = strings => {
  if (strings.length === 0) {
    return '';
  }
  let prefix = strings[0];
  for (let i = 1; i < strings.length; i++) {
    let string = strings[i];
    while (!prefix.startsWith(string)) {
      string = getSubstring(string);
    }
    prefix = string;
  }
  return prefix;
};

module.exports = longestCommonPrefix;
