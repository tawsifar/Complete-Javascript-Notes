// Object immutability

const user = Object.freeze({
  name: "Tawsif",
  age: 18
});

// In strict mode, changing a frozen property throws an error.
// user.age = 19;

console.log(user);

// Object.freeze() prevents adding, deleting, or changing
// properties on the object itself.
// It is shallow.
