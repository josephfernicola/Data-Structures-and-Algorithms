// Implement the function unique_in_order which takes as argument a sequence and returns a list of items
//without any elements with the same value next to each other and preserving the original order of elements.

const uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (iterable.length == 0) {
    return [];
  }
  if (!Array.isArray(iterable)) {
    iterable = iterable.split("");
  }

  const hash = {};
  let index = 1;
  for (let i = 0; i < iterable.length - 1; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      hash[index] = iterable[i];
      index++;
    }
  }
  //returns the last value in array since it will be unique
  hash[index] = iterable[iterable.length - 1];
  return Object.values(hash);
};
