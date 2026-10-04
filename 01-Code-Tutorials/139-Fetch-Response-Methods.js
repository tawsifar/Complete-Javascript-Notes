// Fetch response methods

fetch("https://api.example.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// response.json() reads JSON response data.
// It returns a Promise.
