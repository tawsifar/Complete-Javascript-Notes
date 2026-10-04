// Check whether an object has its own property.

const user = {
  name: "Rahin",
  age: 20
};

console.log(Object.hasOwn(user, "name")); // true
console.log(Object.hasOwn(user, "email")); // false

// hasOwn() checks only the object's own properties.
const parent = { role: "admin" };
const child = Object.create(parent);

child.name = "Rahin";

console.log(Object.hasOwn(child, "role")); // false
console.log("role" in child); // true
