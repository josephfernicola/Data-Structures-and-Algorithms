/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const reg = /[\W_]/g;

  const smallStr = s.toLowerCase().replace(reg, "");

  const reversed = smallStr.split("").reverse().join("");

  if (reversed === smallStr) {
    return true;
  } else {
    return false;
  }
};
