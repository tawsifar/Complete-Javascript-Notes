// Symbol

const id = Symbol("id");

console.log(id);
console.log(typeof id);

const user = {
  name: "Tawsif",
  [id]: 123
};

console.log(user[id]);

// Symbol creates a unique primitive value.
// Symbols can be used as unique object property keys.
