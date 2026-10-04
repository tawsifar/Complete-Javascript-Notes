// Call stack

function first() {
  second();
}

function second() {
  console.log("Inside second");
}

first();

// Function calls are placed on the call stack.
// The most recent function call is completed first.
