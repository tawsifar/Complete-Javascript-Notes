// Promise.any()

const first = Promise.reject(new Error("First failed"));

const second = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Second succeeded");
  }, 500);
});

const third = new Promise(function (resolve) {
  setTimeout(function () {
    resolve("Third succeeded");
  }, 1000);
});

Promise.any([first, second, third])
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// any() fulfills when the first Promise fulfills.
// It rejects only when every Promise rejects.
