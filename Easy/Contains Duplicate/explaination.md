## 🔹 Problem

> Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, otherwise return `false`.

Example:

```
Input: [1,2,3,1]
Output: true   // 1 is duplicated
```

---

## 🔹 Your Code

```js
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};
```

---

## 🔹 Step-by-Step Explanation

### **Step 1: Sort the array**

```js
nums.sort((a, b) => a - b);
```

- Sorting arranges the numbers in ascending order.
- Example: `[3, 1, 2, 1]` → `[1, 1, 2, 3]`.
- Why sort? Because **duplicates will now sit next to each other**.

---

### **Step 2: Loop through array**

```js
for (let i = 0; i < nums.length; i++) {
```

- We scan the array one element at a time.

---

### **Step 3: Compare current with previous**

```js
if (nums[i] === nums[i - 1]) {
  return true;
}
```

- If any number is **equal to the one just before it**, then it must be a duplicate.
- Example: `[1, 1, 2, 3]` → at `i = 1`, `nums[1] === nums[0]` → return `true`.

---

### **Step 4: If no duplicates found**

```js
return false;
```

- If the loop finishes without finding duplicates → return `false`.

---

## 🔹 Example Run

Input: `[2, 14, 18, 2, 9]`

1. Sort → `[2, 2, 9, 14, 18]`
2. Loop:

   - i=0 → skip (no prev)
   - i=1 → `nums[1] = 2`, `nums[0] = 2` → duplicate → return `true`.

---

## 🔹 Complexity Analysis

- **Sorting:** `O(n log n)`
- **Loop:** `O(n)`
- **Total:** `O(n log n)` (dominated by sorting)
- **Space Complexity:** `O(1)` (sort is in-place)

---

✅ So your solution works fine.
⚡ But — there’s a faster method using a **Set**:

```js
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};
```

- Complexity → `O(n)` time, `O(n)` space.
- Faster than sorting, but uses extra memory.
