// Every ordinary JavaScript object can have a prototype.

const person = {
  greet() {
    console.log("Hello");
  }
};

const user = Object.create(person);

user.name = "Rahin";

console.log(user.name);
user.greet();

// Object.getPrototypeOf() returns an object's prototype.
console.log(Object.getPrototypeOf(user) === person);
