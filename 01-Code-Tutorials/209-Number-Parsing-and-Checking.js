// Number parsing and checking

console.log(Number("42"));
console.log(Number.parseInt("42px", 10));
console.log(Number.parseFloat("3.14px"));

console.log(Number.isNaN(NaN));
console.log(Number.isFinite(100));

// Number() converts the complete value when possible.
// parseInt() and parseFloat() can parse numeric prefixes.
