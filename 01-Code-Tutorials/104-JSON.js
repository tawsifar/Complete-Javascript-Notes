// JSON is a text format commonly used for storing and transferring data.

const user = {
  name: "Rahin",
  age: 20
};

// Convert JavaScript object to JSON string.
const jsonData = JSON.stringify(user);

console.log(jsonData);
console.log(typeof jsonData);

// Convert JSON string back to a JavaScript object.
const parsedUser = JSON.parse(jsonData);

console.log(parsedUser);
console.log(parsedUser.name);
