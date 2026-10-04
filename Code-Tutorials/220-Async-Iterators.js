// Async iterators

async function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

async function run() {
  for await (const number of numbers()) {
    console.log(number);
  }
}

run();

// Async generators produce values over time.
// for await...of consumes async iterables.
