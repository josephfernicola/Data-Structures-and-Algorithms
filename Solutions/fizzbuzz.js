// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  let output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
      output.push("Fizz");
    }
    if (i % 5 == 0 && i % 3 !== 0) {
      output.push("Buzz");
    }
    if (i % 3 == 0 && i % 5 == 0) {
      output.push("FizzBuzz");
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      output.push(i.toString());
    }
  }
  return output;
};
