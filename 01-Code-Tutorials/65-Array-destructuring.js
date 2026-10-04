const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

// Skip an element
const [one, , three] = [10, 20, 30];

console.log(one);
console.log(three);

// Default values
const [name = "Unknown", age = 18] = ["Tawsif"];

console.log(name);
console.log(age);

// Rest in destructuring
const [head, ...rest] = [10, 20, 30, 40];

console.log(head);
console.log(rest);