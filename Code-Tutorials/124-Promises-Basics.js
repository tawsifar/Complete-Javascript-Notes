// Promise basics

const promise = new Promise(function (resolve, reject) {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject(new Error("Operation failed"));
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// A Promise represents a future result.
