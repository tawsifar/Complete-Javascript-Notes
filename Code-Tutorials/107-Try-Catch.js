// JavaScript try...catch

try {
  const result = JSON.parse('{"name":"Tawsif"}');
  console.log(result.name);
} catch (error) {
  console.log("Something went wrong:", error.message);
}

try {
  JSON.parse("invalid json");
} catch (error) {
  console.log("Parsing failed:", error.message);
}

// try contains risky code.
// catch runs when an error occurs.
