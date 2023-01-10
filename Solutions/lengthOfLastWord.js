// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring
//  consisting of non-space characters only.



/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  s = s.split(" ").filter(word => word);
  return s[s.length - 1].length;
};