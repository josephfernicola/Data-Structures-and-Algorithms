// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  let array = [];
  for (let i = 0; i < s.length; i++) {
    if (brackets[i]) {
      array.push(brackets[i]);
    } else {
      if (array.pop() !== s[i]) {
        return false;
      }
    }
  }
  if (array.length !== 0) {
    return false;
  }
  return true;
};
