// Top-level await

const response = await fetch("https://api.example.com/data");
const data = await response.json();

console.log(data);

// Top-level await can be used directly inside an ES module.
// It is not available in a regular non-module script.
