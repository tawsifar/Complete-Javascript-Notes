const numbers = [2, 4, 6, 8];

const allEven = numbers.every((number) => number % 2 === 0);

console.log(allEven);

const users = [
    { name: "Tawsif", age: 18 },
    { name: "Rahim", age: 20 }
];

const allAdults = users.every((user) => user.age >= 18);

console.log(allAdults);