// Map stores key-value pairs and allows keys of any type.

const userRoles = new Map();

userRoles.set("Rahin", "Developer");
userRoles.set("Tawsif", "Student");

console.log(userRoles.get("Rahin"));
console.log(userRoles.has("Tawsif"));
console.log(userRoles.size);

userRoles.delete("Tawsif");

console.log(userRoles);
