const original = [10, 20, 30];

const reference = original;

reference.push(40);

console.log(original);
console.log(reference);

// Create a shallow copy with spread
const copy = [...original];

copy.push(50);

console.log(original);
console.log(copy);

// slice() also creates a shallow copy
const anotherCopy = original.slice();

anotherCopy.push(60);

console.log(original);
console.log(anotherCopy);