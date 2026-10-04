const user = {
    name: "Tawsif",
    age: 18
};

const updatedUser = {
    ...user,
    age: 19,
    university: "CUET"
};

console.log(updatedUser);
console.log(user);

// Combine objects
const account = {
    email: "tawsif@example.com"
};

const profile = {
    name: "Tawsif"
};

const combined = {
    ...account,
    ...profile
};

console.log(combined);