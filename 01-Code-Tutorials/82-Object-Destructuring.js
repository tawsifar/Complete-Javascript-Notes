const user = {
    name: "Tawsif",
    age: 18,
    university: "CUET"
};

const { name, age, university } = user;

console.log(name);
console.log(age);
console.log(university);

// Rename variables
const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);

// Default value
const { email = "Not provided" } = user;

console.log(email);