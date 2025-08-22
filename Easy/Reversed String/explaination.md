```js
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], [s[right]]] = [s[right], s[left]]; // ❌ small bug here
    left++;
    right--;
  }
};
```

---

### 🔎 Step 1: Problem

We need to reverse the characters **in place** (inside the same array `s`).
For example:
`s = ["h","e","l","l","o"]` → `["o","l","l","e","h"]`.

---

### 🔎 Step 2: Two-pointer setup

- `left` starts from **beginning** (`0`).
- `right` starts from **end** (`s.length - 1`).
- While `left < right`, swap characters at those two positions.

---

### 🔎 Step 3: Swap logic

You used **array destructuring assignment** (a shorthand swap trick in JS):

```js
[a, b] = [b, a];
```

This swaps values without needing a temporary variable.
So normally, it should be:

```js
[s[left], s[right]] = [s[right], s[left]];
```

✅ Correct way (no extra brackets around `s[right]`).

---

### 🔎 Step 4: Example walkthrough

Input:
`s = ["h","e","l","l","o"]`

- **Iteration 1**:
  left = 0 (`h`), right = 4 (`o`) → swap → `["o","e","l","l","h"]`
  left++, right-- → left = 1, right = 3

- **Iteration 2**:
  left = 1 (`e`), right = 3 (`l`) → swap → `["o","l","l","e","h"]`
  left = 2, right = 2 → loop stops.

Final result → `["o","l","l","e","h"]`

---

✅ **Fixed Code:**

```js
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]; // ✅ fixed
    left++;
    right--;
  }
};
```
