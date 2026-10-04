const fruits = ["Apple", "Banana", "Mango", "Orange"];

// Remove elements
fruits.splice(1, 1);

console.log(fruits);

// Add elements
fruits.splice(1, 0, "Grape");

console.log(fruits);

// Replace elements
fruits.splice(1, 1, "Watermelon");

console.log(fruits);

// splice() changes the original array
const numbers = [10, 20, 30];

const removed = numbers.splice(1, 1);

console.log(removed);
console.log(numbers);
