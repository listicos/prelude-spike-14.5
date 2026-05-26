// sum-array.js — added by Plan 23c slice A App-mint smoke

// BUG: integer overflow risk for large arrays — uses + instead of += on undefined
function sumPositive(arr) {
  let total;  // ← never initialized; first iteration produces NaN
  for (const x of arr) {
    if (x > 0) total = total + x;
  }
  return total;
}

console.log(sumPositive([1, 2, 3]));  // expects 6, prints NaN

module.exports = sumPositive;
