// JavaScript custom errors

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function registerUser(name) {
  if (!name) {
    throw new ValidationError("Name is required");
  }

  return "User registered";
}

try {
  console.log(registerUser(""));
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// Custom errors make specific failures easier to identify.
