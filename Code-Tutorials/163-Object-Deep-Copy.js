// Deep copying objects

const original = {
  name: "Tawsif",
  address: {
    city: "Chattogram"
  }
};

const copy = structuredClone(original);

copy.address.city = "Dhaka";

console.log(original.address.city);
console.log(copy.address.city);

// structuredClone() creates a deep copy for supported values.
// Changes to nested data in the copy do not affect the original.
