// AND
let age = 20;
let hasId = true;

console.log(age >= 18 && hasId);

// OR
let isAdmin = false;
let isOwner = true;

console.log(isAdmin || isOwner);

// NOT
console.log(!true);
console.log(!false);

// Practical example
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in");
}

// Combining operators
let userAge = 20;
let userHasId = true;
let isBanned = false;

if (userAge >= 18 && userHasId && !isBanned) {
    console.log("Access granted");
}

// Truth tables
console.log(true && true);
console.log(true && false);

console.log(true || false);
console.log(false || false);

// Short-circuit evaluation
console.log(false && "Hello");
console.log(true || "Hello");