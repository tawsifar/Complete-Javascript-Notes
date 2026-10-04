const user = {
    name: "Tawsif",
    age: 18,
    email: "tawsif@example.com"
};

console.log(user);

delete user.email;

console.log(user);

// Check whether a property exists
console.log("name" in user);
console.log("email" in user);