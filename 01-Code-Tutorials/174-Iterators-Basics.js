// Iterators basics

const numbers = [10, 20, 30];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// An iterator produces values one at a time.
// next() returns an object with value and done properties.
