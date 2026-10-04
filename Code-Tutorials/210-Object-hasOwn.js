// Object.hasOwn()

const user = {
  name: "Tawsif",
};

console.log(Object.hasOwn(user, "name"));
console.log(Object.hasOwn(user, "toString"));

// Object.hasOwn() checks whether a property belongs directly to an object.
