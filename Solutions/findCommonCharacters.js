// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.

/**
 * @param {string[]} words
 * @return {string[]}
 */
 var commonChars = function(words) {
    let output = [];
  let commonChar = Array(26).fill(0);

  for (let i = 0; i < words[0].length; i++) {
      let count = words[0][i].charCodeAt(0) - "a".charCodeAt(0)
      ++commonChar[count]
  }
  for (let i = 1; i < words.length; i++) {
      let commonTempChar = Array(26).fill(0);
      for (let j = 0; j < words[i].length; j++) {
          let count = words[i][j].charCodeAt(0) - "a".charCodeAt(0)
          ++commonTempChar[count]

      }
      for (let k = 0; k < commonChar.length; k++) {
          commonChar[k] = Math.min(commonChar[k], commonTempChar[k])
      }
  }
  for (let i = 0; i < commonChar.length; i++) {
      while (commonChar[i] > 0) {
          output.push(String.fromCharCode(i + "a".charCodeAt(0)))
          --commonChar[i]
      }
  }
  return output
};