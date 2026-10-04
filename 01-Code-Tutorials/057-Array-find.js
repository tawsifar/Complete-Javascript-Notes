const users = [
    { name: "Tawsif", age: 18 },
    { name: "Rahim", age: 20 },
    { name: "Karim", age: 22 }
];

const user = users.find((user) => user.age === 20);

console.log(user);

const numbers = [10, 20, 30, 40];

const result = numbers.find((number) => number > 25);

console.log(result);