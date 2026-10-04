// Promise chaining

Promise.resolve(10)
  .then(function (value) {
    return value * 2;
  })
  .then(function (value) {
    return value + 5;
  })
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  });

// Each then() can return a value for the next step.
