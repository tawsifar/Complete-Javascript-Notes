// Async functions

async function getMessage() {
  return "Hello";
}

getMessage().then(function (message) {
  console.log(message);
});

// An async function always returns a Promise.
// Returning a normal value fulfills that Promise.
