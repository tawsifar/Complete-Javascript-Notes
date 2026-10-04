// Object.assign() copies properties from source objects into a target object.

const target = { name: "Rahin" };
const source = { age: 20, city: "Feni" };

Object.assign(target, source);

console.log(target);

// Object.assign() mutates the target object.
const user = { name: "Rahin" };
const updatedUser = Object.assign({}, user, { age: 20 });

console.log(updatedUser);
