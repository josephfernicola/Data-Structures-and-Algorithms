// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring
//  consisting of non-space characters only.



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let wordsArray = s.split(" ");
  for (let i = 0; i < wordsArray.length; i++) {
    while (wordsArray[i] === "") {
      wordsArray.splice(i, 1);
    }
  }
  return wordsArray.slice(-1)[0].length;
};
