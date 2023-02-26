// A distinct string is a string that is present only once in an array.

// Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

// Note that the strings are considered in the order in which they appear in the array.

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = function (arr, k) {
  const hash = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  for (const value in hash) {
    if (hash[value] == 1) {
      result.push(value);
    }
  }
  if (result.length < k) {
    return "";
  }
  return result[k - 1];
};
