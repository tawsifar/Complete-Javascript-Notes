// Storing objects with JSON

const user = {
  name: "Tawsif",
  age: 18
};

localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));

console.log(storedUser);

// Storage values are strings.
// JSON.stringify() converts an object to a string.
// JSON.parse() converts it back to an object.
