// Parameters are variables defined in a function
function greet(name) {
    console.log("Hello", name);
}

greet("Tawsif");

// Multiple parameters
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// Missing arguments become undefined
function multiply(a, b) {
    return a * b;
}

console.log(multiply(5));

// Extra arguments are allowed
function welcome(name) {
    console.log("Welcome", name);
}

welcome("Tawsif", 18, "CUET");
