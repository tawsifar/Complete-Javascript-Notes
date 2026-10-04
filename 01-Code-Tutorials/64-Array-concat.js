const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

console.log(combined);
console.log(first);
console.log(second);

const third = [7, 8];

const allNumbers = first.concat(second, third);

console.log(allNumbers);

// Spread can also combine arrays
const spreadCombined = [...first, ...second];

console.log(spreadCombined);