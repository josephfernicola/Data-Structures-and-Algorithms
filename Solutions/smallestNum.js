const smallestNum = (A) => {
    let queue = [];
  
    //Set to store the remainders that have already been visited to improve efficiency
    let previousRemainders = new Set();
    let output = "1";
  
    // Push 1 into queue to begin since the first number will always start with 1 (ex: 1, 10)
    queue.push(output);
  
    while (queue.length) {
      // Take the front number from queue
      output = queue.shift();
  
      // Find remainder of output with respect to num.
      let remainder = parseInt(output) % parseInt(A);
  
      // if remainder is 0 then we have found the answer
      if (remainder == 0) return output;
      // If this remainder is not previously seen,
      // then push new values with 0 and 1 added into queue
      else if (previousRemainders.has(remainder) == false) {
        previousRemainders.add(remainder);
        queue.push(output + "0");
        queue.push(output + "1");
      }
    }
  };