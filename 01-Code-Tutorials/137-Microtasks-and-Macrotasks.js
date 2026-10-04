// Microtasks and macrotasks

console.log("Start");

setTimeout(function () {
  console.log("Timer");
}, 0);

Promise.resolve().then(function () {
  console.log("Microtask");
});

console.log("End");

// Synchronous code runs first.
// Promise callbacks are microtasks.
// Timer callbacks are tasks (often called macrotasks).
// Microtasks are processed before the next task.
