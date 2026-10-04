// Basic function
function greet() {
    console.log("Hello!");
}

greet();

// Calling a function multiple times
greet();
greet();

// Function with a parameter
function welcome(name) {
    console.log("Hello", name);
}

welcome("Tawsif");
welcome("Rahim");

// Multiple parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(5, 7);

// Function with return
function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);

console.log(result);

// Return stops the function
function checkAge(age) {
    if (age < 18) {
        return "Minor";
    }

    return "Adult";
}

console.log(checkAge(20));
