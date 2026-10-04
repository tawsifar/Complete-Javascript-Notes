// Nullish coalescing vs logical OR

const zero = 0;
const empty = "";
const missing = null;

console.log(zero || 10);
console.log(zero ?? 10);

console.log(empty || "Default");
console.log(empty ?? "Default");

console.log(missing ?? "Default");

// || uses the right side for any falsy left value.
// ?? uses the right side only for null or undefined.
