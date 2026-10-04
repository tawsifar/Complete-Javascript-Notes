// Generator yield*

function* first() {
  yield 1;
  yield 2;
}

function* all() {
  yield* first();
  yield 3;
}

console.log([...all()]);

// yield* delegates iteration to another iterable or generator.
