// String conversion
let age = 18;

let ageAsString = String(age);

console.log(ageAsString);
console.log(typeof ageAsString);

// Number conversion
let value = "100";

let number = Number(value);

console.log(number);
console.log(typeof number);

// Decimal string conversion
let price = "99.99";

console.log(Number(price));

// Invalid number conversion
let invalid = "Hello";

console.log(Number(invalid));
console.log(typeof Number(invalid));

// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean("Hello"));
console.log(Boolean(""));

// Truthy value
if ("Hello") {
    console.log("Truthy");
}

// Falsy value
if (0) {
    console.log("This will not run");
}

// Implicit conversion with +
console.log("10" + 5);

// Implicit conversion with -
console.log("10" - 5);

// Explicit conversion
console.log(Number("50"));
console.log(String(50));
console.log(Boolean(50));