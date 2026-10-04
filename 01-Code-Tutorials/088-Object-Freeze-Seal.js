// Object.freeze() prevents adding, removing, or changing properties.

const user = { name: "Rahin" };

Object.freeze(user);

// This change is ignored in non-strict mode.
user.name = "Tawsif";
user.age = 20;

console.log(user);

// Object.seal() prevents adding and removing properties,
// but existing properties can still be changed.
const product = { name: "Laptop", price: 50000 };

Object.seal(product);

product.price = 55000;
delete product.name;

console.log(product);
