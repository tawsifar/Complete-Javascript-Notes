const numbers = [1, 3, 5, 8, 9];

const hasEven = numbers.some((number) => number % 2 === 0);

console.log(hasEven);

const users = [
    { name: "Tawsif", age: 18 },
    { name: "Rahim", age: 16 }
];

const hasAdult = users.some((user) => user.age >= 18);

console.log(hasAdult);