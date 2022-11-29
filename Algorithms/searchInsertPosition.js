// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
    if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    }
  }
  if (target < nums[0]) {
    return 0;
  } else {
    return nums.length;
  }
};
