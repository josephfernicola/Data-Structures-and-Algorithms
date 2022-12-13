// There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] == null) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }
  for (const val in hash) {
    if (hash[val] === 1) {
      return parseFloat(val);
    }
  }
}
