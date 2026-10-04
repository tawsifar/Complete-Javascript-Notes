const message = "JavaScript";

console.log(message.slice(0, 4));
console.log(message.slice(4));
console.log(message.slice(-6));

// The end index is not included
console.log(message.slice(0, 10));

// slice() does not change the original string
console.log(message);