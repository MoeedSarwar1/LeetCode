# 📝 Explanation of `merge sorted arrays` Function

## 📌 Problem

We are given two sorted arrays:

* `nums1` of size `m + n` (first `m` elements are valid, the rest are `0`s for extra space).
* `nums2` of size `n`.

We need to merge `nums2` into `nums1` **in-place** so that `nums1` becomes one sorted array.

---

## 📜 Code

```javascript
var merge = function (nums1, m, nums2, n) {
    var p1 = m - 1;          // pointer at the end of nums1's valid elements
    var p2 = n - 1;          // pointer at the end of nums2
    var i = m + n - 1;       // pointer at the very end of nums1 (extra space)

    while (p2 >= 0) {        // keep going until nums2 is fully merged
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i--] = nums1[p1--];   // place larger element from nums1
        } else {
            nums1[i--] = nums2[p2--];   // place element from nums2
        }
    }
};
```

---

## 🔎 Step-by-Step Logic

1. **Initialize three pointers**

   * `p1 = m - 1` → last valid index in `nums1`.
   * `p2 = n - 1` → last index in `nums2`.
   * `i = m + n - 1` → last index of total space in `nums1`.

2. **Compare elements from the back**

   * Check which is larger: `nums1[p1]` or `nums2[p2]`.
   * Place the larger one at position `i` in `nums1`.

3. **Move pointers**

   * If element from `nums1` was placed → decrement `p1` and `i`.
   * If element from `nums2` was placed → decrement `p2` and `i`.

4. **Stop when `nums2` is fully merged**

   * Loop runs while `p2 >= 0`.
   * If `nums1` elements are left, they’re already in place (since both arrays were sorted).

---

## ✅ Example Walkthrough

Input:

```js
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
```

### Initial pointers

```
nums1 = [1,2,3,0,0,0]
p1 = 2 (pointing to 3)
p2 = 2 (pointing to 6)
i  = 5 (last index)
```

### Step 1

* Compare `nums1[2] = 3` vs `nums2[2] = 6`
* 6 is bigger → place at `nums1[5]`

```
nums1 = [1,2,3,0,0,6]
p2 → 1, i → 4
```

### Step 2

* Compare `3` vs `5`
* 5 is bigger → place at `nums1[4]`

```
nums1 = [1,2,3,0,5,6]
p2 → 0, i → 3
```

### Step 3

* Compare `3` vs `2`
* 3 is bigger → place at `nums1[3]`

```
nums1 = [1,2,3,3,5,6]
p1 → 1, i → 2
```

### Step 4

* Compare `2` vs `2`
* Place `2` (from nums2) at `nums1[2]`

```
nums1 = [1,2,2,3,5,6]
p2 → -1 → loop ends
```

✅ Final Result:

```js
nums1 = [1,2,2,3,5,6]
```

---

## ⚡️ Complexity

* **Time Complexity:** `O(m + n)` → each element processed once.
* **Space Complexity:** `O(1)` → in-place, no extra arrays used.
