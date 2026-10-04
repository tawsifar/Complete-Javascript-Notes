// Basic ternary
let age = 20;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);

// Same logic with if...else
let userAge = 20;
let userStatus;

if (userAge >= 18) {
    userStatus = "Adult";
} else {
    userStatus = "Minor";
}

console.log(userStatus);

// Even or odd
let number = 10;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);

// Ternary inside console.log()
let anotherAge = 15;

console.log(anotherAge >= 18 ? "Adult" : "Minor");

// Nested ternary
let score = 85;

let grade = score >= 80
    ? "A"
    : score >= 70
        ? "B"
        : "C";

console.log(grade);