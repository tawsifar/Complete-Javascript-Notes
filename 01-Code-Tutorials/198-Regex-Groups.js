// Regular expression groups

const text = "Name: Tawsif, Age: 18";

const pattern = /Name: (\w+), Age: (\d+)/;
const match = text.match(pattern);

console.log(match);
console.log(match[1]);
console.log(match[2]);

// Parentheses create capturing groups.
// Captured values are available in the match result.
