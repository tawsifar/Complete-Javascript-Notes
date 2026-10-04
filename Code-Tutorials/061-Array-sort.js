const numbers = [40, 10, 30, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);

numbers.sort((a, b) => b - a);

console.log(numbers);

const names = ["Tawsif", "Rahim", "Karim"];

names.sort();

console.log(names);

// sort() changes the original array
const values = [3, 1, 2];

const sortedValues = [...values].sort((a, b) => a - b);

console.log(sortedValues);
console.log(values);