// Array immutability patterns

const numbers = [1, 2, 3];

const added = [...numbers, 4];
const removed = numbers.filter(function (number) {
  return number !== 2;
});
const updated = numbers.map(function (number) {
  return number === 2 ? 20 : number;
});

console.log(numbers);
console.log(added);
console.log(removed);
console.log(updated);

// Spread, filter, and map can create new arrays
// without changing the original array.
