const numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);

// reverse() changes the original array
const original = ["A", "B", "C"];

const reversed = [...original].reverse();

console.log(reversed);
console.log(original);