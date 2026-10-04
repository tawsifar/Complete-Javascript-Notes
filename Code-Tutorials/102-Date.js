// Date represents dates and times.

const now = new Date();

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); // 0 = January
console.log(now.getDate());

// Create a specific date.
const date = new Date("2026-10-04");

console.log(date.toISOString());

// Date.now() returns the current timestamp in milliseconds.
console.log(Date.now());
