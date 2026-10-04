// Strict mode

"use strict";

function test() {
  // Strict mode prevents some unsafe JavaScript behavior.
  const value = 10;
  console.log(value);
}

test();

// ES modules are automatically strict mode.
// In regular scripts, "use strict" enables strict mode.
