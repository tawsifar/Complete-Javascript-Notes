// Promise.allSettled()

const first = Promise.resolve("Success");
const second = Promise.reject(new Error("Failed"));

Promise.allSettled([first, second]).then(function (results) {
  console.log(results);
});

// allSettled() waits for every Promise.
// It reports both fulfilled and rejected results.
