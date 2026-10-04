// JavaScript finally

try {
  console.log("Trying operation");
} catch (error) {
  console.log("Handling error");
} finally {
  console.log("This always runs");
}

function getData() {
  try {
    return "data";
  } finally {
    console.log("Cleanup");
  }
}

console.log(getData());

// finally is useful for cleanup work.
