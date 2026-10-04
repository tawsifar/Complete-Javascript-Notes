// Object.create()

const personPrototype = {
  greet() {
    console.log("Hello");
  },
};

const person = Object.create(personPrototype);
person.name = "Tawsif";

person.greet();

console.log(Object.getPrototypeOf(person) === personPrototype);

// Object.create() creates an object with a chosen prototype.
