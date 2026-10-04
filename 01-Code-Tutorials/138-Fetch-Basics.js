// Fetch API basics

fetch("https://api.example.com/users")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log("Request failed:", error);
  });

// fetch() starts an HTTP request.
// It returns a Promise.
// The response can be handled with then() and catch().
