# 📝 Explanation of `isValid` Function

## 📌 Problem Statement

We are given a string `s` containing only the characters:

- `(`, `)`, `{`, `}`, `[`, `]`

We need to determine if the input string is **valid**.
A string is valid if:

1. Every opening bracket has a corresponding closing bracket.
2. Brackets close in the correct order (Last Opened → First Closed).

---

## 📜 Code

```javascript
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Case 1: Opening brackets → push to stack
    if (char === "{" || char === "(" || char === "[") {
      stack.push(char);
    }
    // Case 2: Closing brackets → check stack
    else if (char === "}" || char === ")" || char === "]") {
      if (isEmpty(stack)) {
        return false;
      }

      const top = stack.pop();

      // If closing bracket doesn't match the top of stack → invalid
      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  // At the end, stack must be empty (all brackets matched)
  return isEmpty(stack);
};

function isEmpty(s) {
  return s.length === 0;
}
```

---

## 🔎 Step-by-Step Explanation

1. **Initialize a stack**

   ```js
   const stack = [];
   ```

   - The stack is used to keep track of **opening brackets**.

2. **Iterate through the string**

   ```js
   for (let i = 0; i < s.length; i++) { ... }
   ```

   - Process each character one by one.

3. **If it’s an opening bracket**

   ```js
   stack.push(char);
   ```

   - Push it onto the stack for future matching.

4. **If it’s a closing bracket**

   - Check if the stack is empty → invalid (no opening for this closing).
   - Pop the last opening bracket from the stack.
   - Compare if it matches:

     - `)` → must match `(`
     - `}` → must match `{`
     - `]` → must match `[`

   ```js
   if (
     (char === ")" && top !== "(") ||
     (char === "}" && top !== "{") ||
     (char === "]" && top !== "[")
   ) {
     return false;
   }
   ```

5. **Final check**

   ```js
   return isEmpty(stack);
   ```

   - If stack is empty → ✅ valid.
   - If not empty → ❌ invalid (extra opening brackets).

---

## ✅ Example Walkthrough

Input:

```js
isValid("()[]{}");
```

- `(` → push → stack = `['(']`
- `)` → pop `'('` → ✅ matched → stack = `[]`
- `[` → push → stack = `['[']`
- `]` → pop `'['` → ✅ matched → stack = `[]`
- `{` → push → stack = `['{']`
- `}` → pop `'{'` → ✅ matched → stack = `[]`

Stack is empty at end → **Valid** → returns `true`.

---

## ⚡️ Complexity

- **Time Complexity:** `O(n)` (scan the string once).
- **Space Complexity:** `O(n)` (stack stores opening brackets in worst case).
