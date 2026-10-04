const fruits = ["Apple", "Banana", "Mango", "Orange", "Grape"];

// slice(start, end) returns a new array
const selected = fruits.slice(1, 4);

console.log(selected);

// The end index is not included
console.log(fruits.slice(0, 2));

// Omit the end index to go to the end
console.log(fruits.slice(2));

// Negative indexes count from the end
console.log(fruits.slice(-2));

// slice() does not change the original array
console.log(fruits);
