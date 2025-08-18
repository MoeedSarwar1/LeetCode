# 📈 Best Time to Buy and Sell Stock (Explanation)

### Problem

You’re given an array `prices`, where `prices[i]` is the stock price on the `i-th` day.
You need to **maximize profit** by choosing a day to **buy** and a later day to **sell**.
If no profit is possible, return `0`.

---

### ✅ Code

```js
var maxProfit = function (prices) {
  let minPrice = prices[0]; // track the lowest price so far
  let maxProfit = 0; // track the highest profit so far

  for (let i = 1; i < prices.length; i++) {
    // update the minimum price if we find a cheaper one
    minPrice = Math.min(minPrice, prices[i]);

    // calculate profit if we sell today (prices[i] - minPrice)
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
};
```

---

### 🔍 Step-by-Step Example

Input:

```js
prices = [7, 1, 5, 3, 6, 4];
```

Iteration:

1. **Day 1 (price = 7)**

   - `minPrice = 7`, `maxProfit = 0`

2. **Day 2 (price = 1)**

   - Update `minPrice = 1` (found a cheaper stock)
   - Profit = `1 - 1 = 0` → `maxProfit = 0`

3. **Day 3 (price = 5)**

   - Profit = `5 - 1 = 4`
   - Update `maxProfit = 4`

4. **Day 4 (price = 3)**

   - Profit = `3 - 1 = 2` (smaller than 4, no update)

5. **Day 5 (price = 6)**

   - Profit = `6 - 1 = 5`
   - Update `maxProfit = 5`

6. **Day 6 (price = 4)**

   - Profit = `4 - 1 = 3` (smaller than 5, no update)

Final Answer:

```
maxProfit = 5
```

(Buy at **1**, sell at **6**)

---

### ⏱ Complexity

- **Time:** `O(n)` (single loop)
- **Space:** `O(1)` (only two variables stored)
