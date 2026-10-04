// Global scope
const globalName = "Tawsif";

function greet() {
    console.log(globalName);
}

greet();

// Function scope
function showMessage() {
    const message = "Hello!";
    console.log(message);
}

showMessage();

// Block scope
if (true) {
    let age = 18;
    const name = "Tawsif";

    console.log(age);
    console.log(name);
}

// var is not block-scoped
if (true) {
    var score = 100;
}

console.log(score);

// Nested scope
const x = 10;

function outer() {
    const y = 20;

    function inner() {
        const z = 30;

        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
}

outer();

// Shadowing
const name = "Global";

function showName() {
    const name = "Local";
    console.log(name);
}

showName();
console.log(name);
