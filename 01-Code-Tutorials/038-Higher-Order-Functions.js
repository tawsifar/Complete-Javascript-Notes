// A higher-order function accepts another function
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));

// A higher-order function can return a function
function createGreeter() {
    return function () {
        console.log("Hello!");
    };
}

const greet = createGreeter();

greet();

// Returning an arrow function
function createMultiplier(number) {
    return value => value * number;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));

// Array methods can receive callbacks
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
