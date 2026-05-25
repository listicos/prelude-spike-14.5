// greeting.js — added by Plan 23c smoke test
//
// Intentionally has a couple of small things a reviewer might flag,
// so we can verify the reviewer agent actually finds them.

function greet(name) {
  // BUG: missing null-check; will throw TypeError when name is undefined.
  console.log("Hello, " + name.toUpperCase() + "!");
}

// Magic number with no named constant.
setTimeout(() => greet("world"), 3000);

module.exports = greet;
