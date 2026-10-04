// Basic typeof usage
let name = "Tawsif";
let age = 18;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

// Other primitive types
console.log(typeof undefined);
console.log(typeof 123n);
console.log(typeof Symbol("id"));

// Objects
let user = {
    name: "Tawsif",
    age: 18
};

console.log(typeof user);

// Arrays are objects
let numbers = [1, 2, 3];

console.log(typeof numbers);

// Functions return "function"
function greet() {
    console.log("Hello");
}

console.log(typeof greet);

// Historical JavaScript behavior
let value = null;

console.log(typeof value);

// typeof can safely check an undeclared identifier
console.log(typeof unknownVariable);

// Practical type check
if (typeof name === "string") {
    console.log("Name is a string");
}