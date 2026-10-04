// Constructor function
function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User("Tawsif", 18);
const user2 = new User("Rahim", 20);

console.log(user1.name);
console.log(user1.age);

console.log(user2.name);
console.log(user2.age);

// new creates a new object and sets this to that object
function Student(name) {
    this.name = name;
}

const student = new Student("Tawsif");

console.log(student.name);
