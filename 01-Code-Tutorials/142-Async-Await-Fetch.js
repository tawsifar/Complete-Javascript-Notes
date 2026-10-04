// Fetch with async and await

async function getUsers() {
  try {
    const response = await fetch("https://api.example.com/users");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUsers();

// async and await make Promise-based fetch code easier to read.
