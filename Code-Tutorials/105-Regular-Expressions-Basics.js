// Regular expressions describe text patterns.

const email = "rahin@example.com";

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern.test(email));

// Search for a word.
const text = "JavaScript is powerful.";

console.log(/javascript/i.test(text));

// Replace matching text.
console.log(text.replace(/powerful/i, "useful"));
