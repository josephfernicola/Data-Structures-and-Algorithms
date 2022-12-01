// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = function (nums, target) {
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const neededNum = target - currentNum;
    const index2 = previousValues[neededNum];
    if (previousValues[neededNum] != null) {
      return [i, index2];
    }
    previousValues[currentNum] = i;
  }
};
