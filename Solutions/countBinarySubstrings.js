// Given a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

const countBinarySubstrings = function(s) {
    let curr = 1;
    let prev = 0;
    let ans = 0;
    for (let i = 1; i < s.length; i++)
        if (s[i] === s[i-1]) {
            curr++;
        }
        else {
        ans += Math.min(curr, prev);
        prev = curr;
        curr = 1;
        }
    return ans + Math.min(curr, prev);
};