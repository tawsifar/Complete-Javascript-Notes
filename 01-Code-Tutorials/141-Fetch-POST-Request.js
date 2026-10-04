// Fetch POST request

const user = {
  name: "Tawsif",
  age: 18
};

fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// POST sends data to a server.
// JSON.stringify() converts the object into JSON text.
