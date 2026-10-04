// Promise.resolve() and Promise.reject()

const success = Promise.resolve("Success");

success.then(function (value) {
  console.log(value);
});

const failure = Promise.reject(new Error("Failed"));

failure.catch(function (error) {
  console.log(error.message);
});

// Promise.resolve() creates an already fulfilled Promise.
// Promise.reject() creates an already rejected Promise.
