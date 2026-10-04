// NaN

const result = Number("hello");

console.log(result);
console.log(Number.isNaN(result));

console.log(NaN === NaN);

// NaN means "Not a Number".
// NaN is not equal to itself.
// Number.isNaN() is a reliable way to check for NaN.
