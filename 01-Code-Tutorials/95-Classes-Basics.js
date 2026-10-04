// A class provides a cleaner syntax for creating objects.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const user = new User("Rahin", 20);

console.log(user.name);
console.log(user.age);
user.greet();

// Class methods are shared through the prototype.
console.log(User.prototype.greet === user.greet);
