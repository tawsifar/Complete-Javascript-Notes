// Basic arrow function
const greet = () => {
    console.log("Hello!");
};

greet();

// Arrow function with parameters
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// Single parameter
const square = number => {
    return number * number;
};

console.log(square(5));

// Implicit return
const multiply = (a, b) => a * b;

console.log(multiply(5, 4));

// Returning an object
const createUser = () => ({
    name: "Tawsif",
    age: 18
});

console.log(createUser());
