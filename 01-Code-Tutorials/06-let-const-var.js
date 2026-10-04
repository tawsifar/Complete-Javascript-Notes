// let: value can be reassigned
let age = 18;

age = 19;

console.log(age);

// const: value cannot be reassigned
const birthYear = 2007;

console.log(birthYear);

// var: older syntax
var name = "Tawsif";

name = "Rahim";

console.log(name);

// let and const are block-scoped
if (true) {
    let message = "Hello";
    console.log(message);
}

// var is function-scoped, not block-scoped
if (true) {
    var greeting = "Hello";
}

console.log(greeting);

// const object properties can be modified
const user = {
    name: "Tawsif",
    age: 18
};

user.age = 19;

console.log(user.age);

// But the const variable cannot be reassigned
// user = { name: "Rahim" }; // Error

/*
Modern JavaScript:
const: Default choice
let: Use when reassignment is required
var: Generally avoid
*/