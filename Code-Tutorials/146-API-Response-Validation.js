// Basic API response validation

async function getUser() {
  const response = await fetch("https://api.example.com/user");

  if (!response.ok) {
    throw new Error("Request failed");
  }

  const data = await response.json();

  if (!data || typeof data.name !== "string") {
    throw new Error("Invalid response data");
  }

  return data;
}

getUser()
  .then(function (user) {
    console.log(user.name);
  })
  .catch(function (error) {
    console.log("Error:", error.message);
  });

// Validate important API data before using it.
// Server responses should not always be assumed to be correct.
