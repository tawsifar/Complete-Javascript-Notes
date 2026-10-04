// this inside an object method
const user = {
    name: "Tawsif",

    greet() {
        console.log(this.name);
    }
};

user.greet();

// Accessing multiple properties with this
const student = {
    name: "Tawsif",
    age: 18,

    introduce() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.introduce();

// Detaching a method changes how this is called
const person = {
    name: "Tawsif",

    greet() {
        console.log(this.name);
    }
};

const greet = person.greet;

// In strict mode, this is undefined here.
// greet();

// Arrow functions inherit this
const account = {
    name: "Tawsif",

    showName: function () {
        const display = () => {
            console.log(this.name);
        };

        display();
    }
};

account.showName();
