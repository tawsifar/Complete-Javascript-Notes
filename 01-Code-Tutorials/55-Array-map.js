const numbers = [1, 2, 3, 4];

// map() creates a new array
const doubled = numbers.map((number) => {
    return number * 2;
});

console.log(doubled);
console.log(numbers);

// Shorter arrow function
const squared = numbers.map((number) => number * number);

console.log(squared);

// Transforming objects
const users = [
    { name: "Tawsif", age: 18 },
    { name: "Rahim", age: 20 }
];

const names = users.map((user) => user.name);

console.log(names);
