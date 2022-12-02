// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length === 0) {
    return prefix;
  }
  for (let i = 0; i < strs[0].length; i++) {
    let firstWordChar = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (firstWordChar !== strs[j][i]) {
        return prefix;
      }
    }
    prefix += firstWordChar;
  }
  return prefix;
};
