// The value of an alphanumeric string can be defined as:

// The numeric representation of the string in base 10, if it comprises of digits only.
// The length of the string, otherwise.
// Given an array strs of alphanumeric strings, return the maximum value of any string in strs.

const maximumValue = function(strs) {
    let output = 0;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].match(/^[0-9]+$/) !== null) {
            output = Math.max(parseInt(strs[i]), output);
        }
        else {
            output = Math.max(strs[i].length, output);
        }
    }
    return output;
};
