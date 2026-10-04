const numbers = [1, 2, 3, 4, 5, 6];

// Keep elements that pass the condition
const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});

console.log(evenNumbers);

// Filter numbers greater than 3
const largeNumbers = numbers.filter((number) => number > 3);

console.log(largeNumbers);

// Filter objects
const users = [
    { name: "Tawsif", age: 18 },
    { name: "Rahim", age: 16 },
    { name: "Karim", age: 20 }
];

const adults = users.filter((user) => user.age >= 18);

console.log(adults);
