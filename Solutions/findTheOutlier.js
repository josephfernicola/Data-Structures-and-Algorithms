// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  for (let i = 0; i < integers.length; i++) {
    // checking for odd number since first two are even
    if (integers[0] % 2 === 0 && integers[1] % 2 === 0) {
      if (integers[i] % 2 !== 0) {
        return integers[i];
      }
    }

    //checking for even number since first two are odd
    else if (integers[0] % 2 !== 0 && integers[1] % 2 !== 0) {
      if (integers[i] % 2 === 0) {
        return integers[i];
      }
    }

    //since first two are odd and even, check the third number is to know what the outlier is
    else {
      if (integers[2] % 2 === 0) {
        if (integers[i] % 2 !== 0) {
          return integers[i];
        }
      } else if (integers[2] % 2 !== 0) {
        if (integers[i] % 2 === 0) {
          return integers[i];
        }
      }
    }
  }
}
