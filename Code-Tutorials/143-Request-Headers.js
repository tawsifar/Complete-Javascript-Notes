// Request headers

fetch("https://api.example.com/users", {
  headers: {
    Accept: "application/json",
    Authorization: "Bearer TOKEN"
  }
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

// Headers provide extra information to the server.
// Authorization headers are commonly used for protected APIs.
