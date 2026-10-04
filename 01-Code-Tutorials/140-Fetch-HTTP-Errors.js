// Handling HTTP errors with fetch()

fetch("https://api.example.com/users")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// fetch() does not reject automatically for HTTP error status codes.
// response.ok can be checked before processing the data.
