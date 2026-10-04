// extends creates a child class from a parent class.

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name);
    this.role = role;
  }

  showRole() {
    console.log(this.role);
  }
}

const admin = new Admin("Rahin", "Administrator");

admin.greet();
admin.showRole();

// super() calls the parent constructor.
