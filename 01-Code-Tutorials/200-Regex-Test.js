// Regular expression test()

const email = "user@example.com";

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern.test(email));

// test() returns true when the pattern matches.
// It is useful for simple validation checks.
