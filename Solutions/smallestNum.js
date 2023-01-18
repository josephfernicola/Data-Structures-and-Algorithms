// Given a number A, find the smallest number which has only 1s and 0s as its digits which are divisible 
//by the number A.

// For example:

// If the given number A is 4, the smallest number with 1s and 0s which is divisible by 4 is 100.

// If the given number A is 3, the answer would be 111.



const smallestNum = (num) => {

    let queue = [];
    let visit = new Set();
 
    let output = "1";
 
    // Push 1 into queue to begin
    queue.push(output);
 
    // while loop until queue is not empty
    while (queue.length)
    {
        // Take the front number from queue.
        output = queue[0];    

        //Shift method removes first element from array and returns that value
        queue.shift();
 
        // Find remainder of output with respect to num.
        let remainder = mod(output, num);
 
        // if remainder is 0 then we have found the answer
        if (remainder == 0)
            return output;
 
        // If this remainder is not previously seen,
        // then push output0 and output1 in our queue
        else if (visit.has(remainder) == false)
        {
            visit.add(remainder);
            queue.push(output + "0");
            queue.push(output + "1");
        }
    }
}

// Method return output % num, where output is stored as
// a string

const mod = (output, inputNumber) =>
{
    let remainder = 0;
    for (let i = 0; i < output.length; i++)
    {
        remainder = remainder * 10 + (output[i] - '0');
        remainder %= inputNumber;
    }
    return remainder;
}