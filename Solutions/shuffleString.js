// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.


/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    let output = {};
    for (let i = 0; i < s.length; i++) {
        output[indices[i]] = s[i]
    }
   return Object.values(output).join("")
};