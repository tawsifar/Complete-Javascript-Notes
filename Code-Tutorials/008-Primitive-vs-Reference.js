// Primitive values are copied independently
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);

// Objects share the same reference
let user1 = {
    name: "Tawsif"
};

let user2 = user1;

user2.name = "Rahim";

console.log(user1.name);
console.log(user2.name);

// Arrays also show reference behavior
let numbers1 = [1, 2, 3];
let numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);

// Independent objects
let person1 = {
    name: "Tawsif"
};

let person2 = {
    name: "Tawsif"
};

person2.name = "Rahim";

console.log(person1.name);
console.log(person2.name);