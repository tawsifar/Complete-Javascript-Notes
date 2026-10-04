const message = "JavaScript";

console.log(message.substring(0, 4));
console.log(message.substring(4));

// substring() does not use negative indexes as slice() does
console.log(message.substring(-3));

// The larger index is treated as the end
console.log(message.substring(6, 2));