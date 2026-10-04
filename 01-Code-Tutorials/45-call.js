const user = {
    name: "Tawsif"
};

function greet() {
    console.log(this.name);
}

greet.call(user);

function introduce(age, university) {
    console.log(this.name);
    console.log(age);
    console.log(university);
}

introduce.call(user, 18, "CUET");

function showName() {
    console.log(this.name);
}

const student = {
    name: "Tawsif"
};

showName.call(student);
