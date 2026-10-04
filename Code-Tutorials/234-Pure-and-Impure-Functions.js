// Pure and impure functions

function add(a, b) {
  return a + b;
}

let total = 0;

function addToTotal(value) {
  total += value;
}

console.log(add(2, 3));
addToTotal(5);

// A pure function depends only on its inputs and has no side effects.
// An impure function can read or change external state.
