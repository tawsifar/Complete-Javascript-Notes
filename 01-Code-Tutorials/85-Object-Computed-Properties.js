const key = "name";

const user = {
    [key]: "Tawsif",
    age: 18
};

console.log(user.name);

// Computed property with an expression
const propertyName = "email";

const account = {
    [propertyName]: "tawsif@example.com"
};

console.log(account.email);

// Computed property names are useful when the key is dynamic
const field = "score";
const value = 95;

const result = {
    [field]: value
};

console.log(result);