// Function declaration hoisting

greet();

function greet() {
  console.log("Hello");
}

// Function declarations can be called before
// their declaration in the same scope.
