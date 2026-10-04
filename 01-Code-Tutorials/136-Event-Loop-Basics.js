// JavaScript event loop basics

console.log("Start");

setTimeout(function () {
  console.log("Timer");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise");
});

console.log("End");

// Synchronous code runs first.
// Promise callbacks use the microtask queue.
// Timer callbacks use the task queue.
// The event loop coordinates when queued callbacks can run.
