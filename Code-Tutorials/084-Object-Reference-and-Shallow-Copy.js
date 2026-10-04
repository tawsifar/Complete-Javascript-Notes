const original = {
    name: "Tawsif",
    age: 18
};

const reference = original;

reference.age = 19;

console.log(original.age);
console.log(reference.age);

// Shallow copy with spread
const copy = {
    ...original
};

copy.age = 20;

console.log(original.age);
console.log(copy.age);

// Nested objects are still shared in a shallow copy
const user = {
    name: "Tawsif",
    address: {
        city: "Feni"
    }
};

const userCopy = {
    ...user
};

userCopy.address.city = "Chattogram";

console.log(user.address.city);
console.log(userCopy.address.city);