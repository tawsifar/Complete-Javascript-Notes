// Property descriptors control how object properties behave.

const user = {
  name: "Rahin"
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "age", {
  value: 20,
  writable: false,
  enumerable: true,
  configurable: true
});

console.log(user.age);

// writable: false prevents changing the property value.
user.age = 21;

console.log(user.age);
