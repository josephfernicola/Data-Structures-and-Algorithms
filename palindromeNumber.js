// Given an integer x, return true if x is a
// palindrome, and false otherwise.

const isPalindrome = function (x) {
  x = x.toString().split("");
  //for negative numbers, return false
  if (x[0] == "-") {
    return false;
  }
  let left = 0;
  let right = x.length - 1;
  while (right > left) {
    if (x[left] != x[right]) {
      return false;
    }
    right--;
    left++;
  }
  return true;
};
