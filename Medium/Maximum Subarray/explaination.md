# 📝 Explanation of `maxSubArray`

## 📌 Problem

Given an array `nums`, find the **largest sum of any contiguous subarray** (must contain at least one number).

---

## 📜 Code (your version)

```javascript
var maxSubArray = function (nums) {
  let maxSum = nums[0]; // supposed to track current sum
  let currentSum = nums[0]; // supposed to track global max

  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(nums[i], maxSum + nums[i]); // update running sum
    currentSum = Math.max(currentSum, maxSum); // update global max
  }
  return currentSum;
};
```

---

## 🔎 Step-by-Step Logic (Kadane’s Algorithm)

1. **Initialize**

   - Start with the first element:

     - `maxSum` → best sum _ending at current position_ (running sum).
     - `currentSum` → best sum _seen overall_.

2. **Iterate over array**

   - For each number `nums[i]`:

     - Either **extend the previous subarray** (`maxSum + nums[i]`)
       OR **start fresh** from current number (`nums[i]`).
     - Update `maxSum` accordingly:

       ```js
       maxSum = Math.max(nums[i], maxSum + nums[i]);
       ```

   - Then, update the global maximum:

     ```js
     currentSum = Math.max(currentSum, maxSum);
     ```

3. **Return the best result**

   - At the end, `currentSum` holds the maximum subarray sum.

---

## ✅ Example Walkthrough

Input:

```js
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
```

Step-by-step:

| i   | nums\[i] | maxSum (ending here) | currentSum (global max) |
| --- | -------- | -------------------- | ----------------------- |
| 0   | -2       | -2                   | -2                      |
| 1   | 1        | max(1, -2+1) = 1     | max(-2, 1) = 1          |
| 2   | -3       | max(-3, 1-3) = -2    | max(1, -2) = 1          |
| 3   | 4        | max(4, -2+4) = 4     | max(1, 4) = 4           |
| 4   | -1       | max(-1, 4-1) = 3     | max(4, 3) = 4           |
| 5   | 2        | max(2, 3+2) = 5      | max(4, 5) = 5           |
| 6   | 1        | max(1, 5+1) = 6      | max(5, 6) = 6           |
| 7   | -5       | max(-5, 6-5) = 1     | max(6, 1) = 6           |
| 8   | 4        | max(4, 1+4) = 5      | max(6, 5) = 6           |

Final Answer → **6**
(Subarray `[4, -1, 2, 1]` gives the max sum).

---

## ⚡️ Complexity

- **Time:** `O(n)` → only one pass through the array.
- **Space:** `O(1)` → constant extra variables.

---

✅ In short:

- `maxSum` = local best (ending at current index).
- `currentSum` = global best (so far).
- At each step → decide: extend previous subarray or start fresh.
