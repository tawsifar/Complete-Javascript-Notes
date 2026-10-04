const input = "   Tawsif Rahin   ";

console.log(input);
console.log(input.trim());

// trimStart() removes whitespace from the beginning
console.log(input.trimStart());

// trimEnd() removes whitespace from the end
console.log(input.trimEnd());

// Useful for cleaning user input
const username = "   tawsif   ";

const cleanedUsername = username.trim();

console.log(cleanedUsername);