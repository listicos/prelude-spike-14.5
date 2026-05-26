// tiny-bug.js — Plan 23c App-mint final smoke

// BUG: == should be ===
function isReady(state) {
  return state == "ready";
}

module.exports = isReady;
