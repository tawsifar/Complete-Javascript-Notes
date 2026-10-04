// Short-circuit evaluation

const isLoggedIn = true;

isLoggedIn && console.log("Welcome");

const username = "";
const displayName = username || "Guest";

console.log(displayName);

// && stops when the left side is falsy.
// || stops when the left side is truthy.
// Short-circuiting is useful for conditional expressions.
