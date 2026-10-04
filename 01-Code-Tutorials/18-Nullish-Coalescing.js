// Basic nullish coalescing
let username = null;

let result = username ?? "Guest";

console.log(result);

// Undefined value
let name;

console.log(name ?? "Guest");

// Existing value
let user = "Tawsif";

console.log(user ?? "Guest");

// Difference between ?? and ||
let score = 0;

console.log(score || 100);
console.log(score ?? 100);

// Empty string
let nickname = "";

console.log(nickname || "Guest");
console.log(nickname ?? "Guest");

// Practical example
let displayName = null;

console.log(displayName ?? "Anonymous");
