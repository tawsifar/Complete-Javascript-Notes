// Basic optional chaining
let user = {};

console.log(user.profile?.name);

// Multiple levels
console.log(user.profile?.address?.city);

// Existing data
let account = {
    profile: {
        name: "Tawsif"
    }
};

console.log(account.profile?.name);

// Optional method call
let person = {};

person.sayHello?.();

// Optional array access
let users = [];

console.log(users[0]?.name);

// Optional chaining with nullish coalescing
let displayName = account.profile?.name ?? "Guest";

console.log(displayName);
