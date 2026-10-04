// Array flat() and flatMap()

const nested = [1, [2, 3], [4, [5]]];

console.log(nested.flat());
console.log(nested.flat(2));

const numbers = [1, 2, 3];

console.log(
  numbers.flatMap(function (number) {
    return [number, number * 2];
  })
);

// flat() removes nested array levels.
// flatMap() maps values and then flattens one level.
