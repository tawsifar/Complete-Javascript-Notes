// Destructuring with default values

const user = {
  name: "Tawsif"
};

const {
  name,
  age = 18
} = user;

console.log(name);
console.log(age);

// A destructuring default is used when the property is undefined.
