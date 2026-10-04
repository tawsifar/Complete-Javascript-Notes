// Generators with for...of

function* colors() {
  yield "red";
  yield "green";
  yield "blue";
}

for (const color of colors()) {
  console.log(color);
}

// Generators are iterable.
// for...of can consume the values produced by yield.
