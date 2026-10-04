// Lexical scope
const globalName = "Tawsif";

function greet() {
    console.log(globalName);
}

greet();

// Nested lexical scope
function outer() {
    const message = "Hello from outer";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// Lexical scope is based on where a function is defined
const name = "Global";

function createFunction() {
    const name = "Outer";

    function showName() {
        console.log(name);
    }

    return showName;
}

const showName = createFunction();

showName();

// Lexical scope and closures
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();
