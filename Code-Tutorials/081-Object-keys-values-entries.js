const user = {
    name: "Tawsif",
    age: 18,
    university: "CUET"
};

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));

// Useful for iterating over object data
for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}