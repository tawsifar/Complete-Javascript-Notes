// Default parameters and undefined

function greet(name = "Guest") {
  console.log(name);
}

greet();
greet(undefined);
greet(null);

// The default value is used when the argument is undefined.
// Passing null does not trigger the default parameter.
