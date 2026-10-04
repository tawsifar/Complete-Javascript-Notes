// Basic do...while loop
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

// Runs at least once
let number = 10;

do {
    console.log(number);
} while (number < 5);

// Practical retry example
let attempts = 0;

do {
    console.log("Attempting...");
    attempts++;
} while (attempts < 3);
