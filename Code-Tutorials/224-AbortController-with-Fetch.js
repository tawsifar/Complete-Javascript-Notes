// AbortController with fetch

const controller = new AbortController();

fetch("/api/data", {
  signal: controller.signal,
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

// AbortController can cancel an in-progress fetch request.
