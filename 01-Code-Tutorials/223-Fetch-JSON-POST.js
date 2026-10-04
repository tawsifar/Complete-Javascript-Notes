// Fetch JSON POST request

async function createUser() {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Tawsif",
    }),
  });

  const data = await response.json();
  console.log(data);
}

createUser();

// JSON requests need the correct Content-Type and serialized body.
