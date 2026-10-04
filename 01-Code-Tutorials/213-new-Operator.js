// The new operator

function User(name) {
  this.name = name;
}

const user = new User("Tawsif");

console.log(user.name);
console.log(user instanceof User);

// new creates an object, connects its prototype,
// calls the constructor with that object as this, and returns it.
