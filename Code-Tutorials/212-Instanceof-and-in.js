// instanceof and in

class User {}

const user = new User();

console.log(user instanceof User);
console.log("name" in user);

// instanceof checks the prototype relationship.
// in checks whether a property exists on the object or its prototype chain.
