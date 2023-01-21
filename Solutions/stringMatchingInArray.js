// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

/**
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    let array = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[i] === words[j]) continue;
            if (words[j].includes(words[i]) && !array.includes(words[i])) {
                array.push(words[i])
            }
        }
    }
    return array;
};