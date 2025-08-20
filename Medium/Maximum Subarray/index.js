var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(nums[i], maxSum + nums[i]);
    currentSum = Math.max(currentSum, maxSum);
  }
  return currentSum;
};
