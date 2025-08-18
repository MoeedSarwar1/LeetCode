// Two Sum

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    // Loop through the array to find two indices
    for (let j = i + 1; j < nums.length; j++) {
      // Check if the sum of the two numbers equals the target
      if (nums[i] + nums[j] === target) {
        // Return the indices of the two numbers that add up to the target
        return [i, j];
      }
    }
  }
  // If no solution is found, return undefined
};

// Example usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
