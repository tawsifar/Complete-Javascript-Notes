// Promise states

const promise = new Promise(function (resolve) {
  resolve("Done");
});

console.log(promise);

// A Promise starts as pending.
// It becomes fulfilled after resolve().
// It becomes rejected after reject().
// A settled Promise cannot change state again.
