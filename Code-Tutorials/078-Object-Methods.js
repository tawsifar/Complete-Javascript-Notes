const user = {
    name: "Tawsif",
    age: 18,

    greet() {
        console.log("Hello, " + this.name);
    },

    getAge() {
        return this.age;
    }
};

user.greet();

console.log(user.getAge());

// Methods can use object properties through this
const calculator = {
    a: 10,
    b: 20,

    add() {
        return this.a + this.b;
    }
};

console.log(calculator.add());