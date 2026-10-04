// Execution context basics

const name = "Tawsif";

function greet() {
  const message = "Hello " + name;
  console.log(message);
}

greet();

// JavaScript creates an execution context when code runs.
// A function call creates a new function execution context.
