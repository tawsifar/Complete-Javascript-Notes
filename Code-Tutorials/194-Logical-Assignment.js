// Logical assignment operators

let username = "";
username ||= "Guest";

let enabled = true;
enabled &&= false;

let value = null;
value ??= 100;

console.log(username);
console.log(enabled);
console.log(value);

// ||= assigns when the left side is falsy.
// &&= assigns when the left side is truthy.
// ??= assigns when the left side is null or undefined.
