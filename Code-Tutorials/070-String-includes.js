const message = "JavaScript is powerful";

console.log(message.includes("JavaScript"));
console.log(message.includes("Python"));

// includes() is case-sensitive
console.log(message.includes("javascript"));

// Useful for checking user input
const email = "user@example.com";

console.log(email.includes("@"));