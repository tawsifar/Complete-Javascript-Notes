// JavaScript can throw errors when something goes wrong.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}

// throw creates an error intentionally.
function validateAge(age) {
  if (age < 18) {
    throw new Error("User must be at least 18");
  }

  return true;
}

console.log(validateAge(20));
