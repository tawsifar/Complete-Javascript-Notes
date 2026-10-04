// Promise microtask ordering

console.log("Start");

Promise.resolve().then(function () {
  console.log("Promise callback");
});

setTimeout(function () {
  console.log("Timer callback");
}, 0);

console.log("End");

// Synchronous code runs first.
// Promise callbacks run as microtasks before timer callbacks.
