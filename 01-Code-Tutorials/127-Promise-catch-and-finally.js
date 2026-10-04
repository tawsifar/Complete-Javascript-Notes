// Promise catch() and finally()

Promise.resolve("Success")
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log("Error:", error);
  })
  .finally(function () {
    console.log("Finished");
  });

Promise.reject(new Error("Something went wrong"))
  .catch(function (error) {
    console.log(error.message);
  })
  .finally(function () {
    console.log("Cleanup complete");
  });

// catch() handles rejection.
// finally() runs after the Promise settles.
