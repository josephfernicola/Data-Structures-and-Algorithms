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
