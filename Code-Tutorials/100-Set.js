// Set stores unique values.

const numbers = new Set([1, 2, 2, 3, 4, 4]);

console.log(numbers);

numbers.add(5);
numbers.delete(1);

console.log(numbers.has(3));
console.log(numbers.size);

// Convert a Set back to an array.
const uniqueNumbers = [...numbers];

console.log(uniqueNumbers);
