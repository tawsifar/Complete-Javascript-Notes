// Basic template literal
let name = "Tawsif";

console.log(`Hello ${name}`);

// Multiple variables
let age = 18;

console.log(`My name is ${name} and I am ${age} years old.`);

// Expressions
let price = 500;
let quantity = 3;

console.log(`Total: ${price * quantity}`);

// Function calls
function getName() {
    return "Tawsif";
}

console.log(`Hello, ${getName()}!`);

// Multiple lines
let message = `Hello Tawsif.
Welcome to JavaScript.
Keep learning!`;

console.log(message);

// String concatenation vs template literal
console.log("My name is " + name + " and I am " + age + " years old.");

console.log(`My name is ${name} and I am ${age} years old.`);