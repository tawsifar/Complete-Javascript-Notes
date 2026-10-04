// Return a value
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);

// A function without return
function greet() {
    console.log("Hello");
}

const greeting = greet();

console.log(greeting);

// Return stops function execution
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(20));

// Return and console.log() are different
function multiply(a, b) {
    return a * b;
}

const product = multiply(5, 4);

console.log(product);

// Returned value can be used in another function
function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

const value = square(double(3));

console.log(value);

// Returning different types
function getName() {
    return "Tawsif";
}

function isAdult() {
    return true;
}

function getNumbers() {
    return [10, 20, 30];
}

function getUser() {
    return {
        name: "Tawsif",
        age: 18
    };
}

console.log(getName());
console.log(isAdult());
console.log(getNumbers());
console.log(getUser());

// Returning an object to represent multiple values
function createUser() {
    return {
        name: "Tawsif",
        age: 18
    };
}

const user = createUser();

console.log(user.name);
console.log(user.age);
