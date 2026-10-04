const user = {
    name: "Tawsif",
    address: {
        city: "Chattogram",
        country: "Bangladesh"
    }
};

console.log(user.name);
console.log(user.address.city);
console.log(user.address.country);

// Updating nested properties
user.address.city = "Feni";

console.log(user.address.city);

// Adding a nested property
user.address.postCode = 3900;

console.log(user.address.postCode);