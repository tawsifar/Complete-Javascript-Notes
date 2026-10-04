const fruits = ["Apple", "Banana"];

// Add to the end
fruits.push("Mango");

console.log(fruits);

// Remove from the end
fruits.pop();

console.log(fruits);

// Add to the beginning
fruits.unshift("Orange");

console.log(fruits);

// Remove from the beginning
fruits.shift();

console.log(fruits);

// push() returns the new length
const length = fruits.push("Mango");

console.log(length);
console.log(fruits);

// pop() returns the removed element
const removed = fruits.pop();

console.log(removed);
console.log(fruits);
