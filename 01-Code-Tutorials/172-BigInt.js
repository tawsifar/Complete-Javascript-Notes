// BigInt

const largeNumber = 9007199254740993n;

console.log(largeNumber);
console.log(typeof largeNumber);

const a = 10n;
const b = 20n;

console.log(a + b);

// BigInt is used for integers larger than Number can safely represent.
// BigInt values use the n suffix.
// Do not mix BigInt and Number directly in arithmetic.
