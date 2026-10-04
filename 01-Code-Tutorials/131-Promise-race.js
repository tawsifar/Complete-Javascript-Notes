// Promise.race()

const fast = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Fast result");
  }, 500);
});

const slow = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Slow result");
  }, 1000);
});

Promise.race([fast, slow]).then(function (result) {
  console.log(result);
});

// race() settles as soon as the first Promise settles.
