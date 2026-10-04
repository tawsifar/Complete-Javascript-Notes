// Regular expression flags

const text = "JavaScript javascript";

console.log(text.match(/javascript/i));
console.log(text.match(/javascript/g));
console.log(text.match(/javascript/gi));

// i makes matching case-insensitive.
// g finds all matches.
// Flags can be combined.
