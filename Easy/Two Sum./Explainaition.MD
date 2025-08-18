# 📝 Explanation of the Two Sum Code

## 📌 Problem Statement

The **Two Sum** problem asks us to find **two numbers** in an array such that their sum equals a given `target`.
We must return the **indices** of those two numbers.

---

## 📜 Code Walkthrough

```javascript
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
```

---

## 🔎 Step-by-Step Explanation

1. **Outer loop (`i`)**

   ```js
   for (let i = 0; i <= nums.length; i++)
   ```

   * Iterates through each element in the array `nums`.
   * `i` represents the index of the **first number**.

   ⚠️ Small correction: It should ideally be `< nums.length` instead of `<= nums.length`, otherwise it will go one step out of bounds.

2. **Inner loop (`j`)**

   ```js
   for (let j = i + 1; j < nums.length; j++)
   ```

   * Starts from the **next index** after `i` (`i + 1`), to avoid checking the same number twice.
   * `j` represents the index of the **second number**.

3. **Check condition**

   ```js
   if (nums[i] + nums[j] === target)
   ```

   * Adds the two numbers (`nums[i]` and `nums[j]`).
   * If their sum equals the `target`, we found a solution.

4. **Return indices**

   ```js
   return [i, j];
   ```

   * Returns the indices of the two numbers that satisfy the condition.

5. **Fallback case**

   ```js
   return undefined;
   ```

   * If no pair of numbers adds up to the `target`, the function returns `undefined`.

---

## ✅ Example

```js
console.log(twoSum([2, 7, 11, 15], 9)); 
```

* Iteration checks:

  * `2 + 7 = 9` ✅ → Matches the target.
* Returns:

  ```js
  [0, 1]
  ```

  Since `nums[0] = 2` and `nums[1] = 7`.

---

## ⚡️ Time Complexity

* **Outer loop** runs `n` times.
* **Inner loop** runs up to `n` times (in worst case).
* Total → **O(n²)** time complexity.
* Space complexity → **O(1)** (no extra storage).

