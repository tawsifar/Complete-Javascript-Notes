// JavaScript best practices

const userName = "Tawsif";

function greet(name) {
  if (!name) {
    return;
  }

  console.log("Hello", name);
}

greet(userName);

// Prefer clear names.
// Keep functions focused.
// Avoid unnecessary global state.
// Use const by default and let when reassignment is required.
// Validate external data.
// Handle errors intentionally.
// Keep asynchronous code readable.
// Prefer simple solutions over clever code.
