const user = {
    name: "Tawsif"
};

function greet(message) {
    console.log(message + ", " + this.name);
}

const greetUser = greet.bind(user);

greetUser("Hello");

// bind() does not execute the function immediately
const introduce = greet.bind(user, "Welcome");

introduce();

// bind() can preserve this for callbacks
const student = {
    name: "Tawsif",

    greet() {
        return function () {
            console.log(this.name);
        }.bind(this);
    }
};

const showName = student.greet();

showName();
