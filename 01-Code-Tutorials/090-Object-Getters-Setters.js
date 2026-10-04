// A getter reads a value like a property.

const user = {
  firstName: "Tawsif",
  lastName: "Rahin",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user.fullName);

// A setter controls how a property is assigned.

const account = {
  balance: 0,

  set deposit(amount) {
    this.balance += amount;
  }
};

account.deposit = 500;
console.log(account.balance);
