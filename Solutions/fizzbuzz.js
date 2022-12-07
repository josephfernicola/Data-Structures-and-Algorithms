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
