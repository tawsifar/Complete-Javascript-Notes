// Constructor functions can create multiple objects with shared behavior.

function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Hello, ${this.name}`);
};

const user1 = new User("Rahin");
const user2 = new User("Tawsif");

user1.greet();
user2.greet();

console.log(user1.greet === user2.greet);

// The method is stored on the prototype,
// so each object does not need its own copy.
