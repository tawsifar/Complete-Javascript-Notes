const user = {
    name: "Tawsif",
    profile: {
        city: "Feni"
    }
};

console.log(user.profile?.city);
console.log(user.address?.city);

// Optional chaining with a method
const account = {
    greet() {
        console.log("Hello");
    }
};

account.greet?.();
account.login?.();