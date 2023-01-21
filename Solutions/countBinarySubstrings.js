// Given a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

const countBinarySubstrings = function(s) {
    let current = 1;
    let previous = 0;
    let answer = 0;
    for (let i = 1; i < s.length; i++)
        if (s[i] === s[i-1]) {
            current++;
        }
        else {
        answer += Math.min(current, previous);
        previous = current;
        current = 1;
        }
    return answer + Math.min(current, previous);
};