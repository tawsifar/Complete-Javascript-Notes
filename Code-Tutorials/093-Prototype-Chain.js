// JavaScript looks for a property through the prototype chain
// when it is not found directly on the object.

const grandParent = {
  country: "Bangladesh"
};

const parent = Object.create(grandParent);
parent.role = "Developer";

const child = Object.create(parent);
child.name = "Rahin";

console.log(child.name);
console.log(child.role);
console.log(child.country);

// The lookup continues until the property is found
// or the chain reaches null.
console.log(Object.getPrototypeOf(Object.getPrototypeOf(child)) === grandParent);
