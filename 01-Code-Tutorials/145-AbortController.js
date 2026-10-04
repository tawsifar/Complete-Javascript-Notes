// AbortController

const controller = new AbortController();

fetch("https://api.example.com/users", {
  signal: controller.signal
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error.name);
  });

controller.abort();

// AbortController can cancel operations such as fetch requests.
