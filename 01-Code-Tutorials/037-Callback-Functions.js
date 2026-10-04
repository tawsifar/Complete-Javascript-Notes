// Passing a function as a callback
function greet(name) {
    console.log("Hello", name);
}

function processUser(callback) {
    callback("Tawsif");
}

processUser(greet);

// Anonymous callback
function execute(callback) {
    callback();
}

execute(function () {
    console.log("Hello!");
});

// Arrow function as a callback
execute(() => {
    console.log("Hello from arrow function!");
});

// Callback with parameters
function processNumber(number, callback) {
    callback(number);
}

function showNumber(number) {
    console.log(number);
}

processNumber(10, showNumber);

// Callback can control the operation
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));
