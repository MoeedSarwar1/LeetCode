You want to **move all the zeroes in the array to the end, while keeping the order of non-zero elements the same**. Example:

👉 Input: `[0,1,0,3,12]`
👉 Output: `[1,3,12,0,0]`

---

### Code Explanation

```js
var moveZeroes = function (nums) {
  let insertPos = 0; // pointer to track where the next non-zero should go

  // 1️⃣ First pass: Move non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i]; // place non-zero at insertPos
      insertPos++; // move insertPos forward
    }
  }

  // 2️⃣ Second pass: Fill remaining positions with zero
  while (insertPos < nums.length) {
    nums[insertPos] = 0;
    insertPos++;
  }
};
```

---

### Walkthrough Example

Take `nums = [0,1,0,3,12]`

**Step 1: Move non-zeros forward**

- `insertPos = 0`
- i = 0 → `nums[0] = 0` → skip
- i = 1 → `nums[1] = 1` → put at `nums[0]` → `[1,1,0,3,12]` → `insertPos = 1`
- i = 2 → `nums[2] = 0` → skip
- i = 3 → `nums[3] = 3` → put at `nums[1]` → `[1,3,0,3,12]` → `insertPos = 2`
- i = 4 → `nums[4] = 12` → put at `nums[2]` → `[1,3,12,3,12]` → `insertPos = 3`

Now array looks like `[1,3,12,3,12]` — the extra numbers are still there, we’ll clean them up.

**Step 2: Fill rest with 0**

- while loop starts at `insertPos = 3`
- set `nums[3] = 0` → `[1,3,12,0,12]`
- set `nums[4] = 0` → `[1,3,12,0,0]`

✅ Done.

---

### Key Idea

- **Two passes**:

  - First pass = move all non-zeros forward.
  - Second pass = fill trailing positions with zeros.

- **Time complexity** = O(n) (just two loops over the array).

- **Space complexity** = O(1) (done in-place, no extra array).
