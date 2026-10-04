// Basic function expression
const greet = function () {
    console.log("Hello!");
};

greet();

// Function expression with parameters
const welcome = function (name) {
    console.log("Hello", name);
};

welcome("Tawsif");

// Returning a value
const add = function (a, b) {
    return a + b;
};

let result = add(10, 20);

console.log(result);

// Function as a value
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4));
