// Generators basics

function* numbers() {
  yield 10;
  yield 20;
  yield 30;
}

const generator = numbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// A generator function uses function*.
// yield pauses the generator and provides a value.
