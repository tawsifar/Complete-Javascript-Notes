// Iterable and iterator

const numbers = [10, 20];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// An iterable provides Symbol.iterator.
// An iterator provides next() and returns { value, done }.
