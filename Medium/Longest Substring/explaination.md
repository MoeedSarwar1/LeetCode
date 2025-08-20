# 📝 Explanation of `lengthOfLongestSubstring`

## 📌 Problem

Given a string `s`, find the **length of the longest substring** (continuous part of the string) that has **no repeating characters**.

---

## 📜 Code

```javascript
var lengthOfLongestSubstring = function (s) {
  let set = new Set(); // stores unique characters in current window
  let left = 0; // left pointer of the sliding window
  let maxLength = 0; // track the longest substring length

  for (let right = 0; right < s.length; right++) {
    // If current char is duplicate → shrink window from left
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    // Add current character into window
    set.add(s[right]);

    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
```

---

## 🔎 Step-by-Step Logic

1. **Sliding Window Setup**

   - Two pointers:

     - `left` → start of window
     - `right` → end of window

   - A **Set** keeps track of characters in the current window.

2. **Expand Window (right pointer)**

   - Move `right` one step at a time.
   - If `s[right]` is **not in set**, add it → valid unique substring.

3. **Shrink Window (left pointer)**

   - If `s[right]` is already in set (duplicate found):

     - Keep removing `s[left]` from set.
     - Move `left` forward until duplicate is removed.

4. **Update Max Length**

   - Each time window expands, compute `right - left + 1`.
   - Keep track of maximum.

---

## ✅ Example Walkthrough

Input:

```js
s = "abcabcbb";
```

### Step-by-step:

| Right | Char | Action                  | Window (Set) | Left | Max Length |
| ----- | ---- | ----------------------- | ------------ | ---- | ---------- |
| 0     | a    | add 'a'                 | {a}          | 0    | 1          |
| 1     | b    | add 'b'                 | {a,b}        | 0    | 2          |
| 2     | c    | add 'c'                 | {a,b,c}      | 0    | 3          |
| 3     | a    | duplicate → remove left | {b,c,a}      | 1    | 3          |
| 4     | b    | duplicate → remove left | {c,a,b}      | 2    | 3          |
| 5     | c    | duplicate → remove left | {a,b,c}      | 3    | 3          |
| 6     | b    | duplicate → remove left | {c,b}        | 5    | 3          |
| 7     | b    | duplicate → remove left | {b}          | 7    | 3          |

Final Answer → `3` (`"abc"` is longest unique substring).

---

## ⚡️ Complexity

- **Time:** `O(n)` → each character added/removed at most once.
- **Space:** `O(min(n, charset))` → set stores current window characters (at most 26 for lowercase letters, 128 for ASCII, etc).

---

👉 In short:
You’re moving a **sliding window \[left, right]** across the string, adjusting whenever duplicates appear, and keeping track of the longest substring without repeating characters.
