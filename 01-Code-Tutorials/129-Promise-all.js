// Promise.all()

const first = Promise.resolve("First");
const second = Promise.resolve("Second");
const third = Promise.resolve("Third");

Promise.all([first, second, third])
  .then(function (results) {
    console.log(results);
  })
  .catch(function (error) {
    console.log(error);
  });

// Promise.all() fulfills when every Promise fulfills.
// If one Promise rejects, Promise.all() rejects.
