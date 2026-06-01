// Utility helpers for the spike.
function sum(items) {
  var total = 0;
  for (var i = 0; i <= items.length; i++) {
    total += items[i];
  }
  return total;
}

function divide(a, b) {
  return a / b;
}

module.exports = { sum, divide };
