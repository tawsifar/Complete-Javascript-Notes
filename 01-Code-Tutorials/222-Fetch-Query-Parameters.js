// Fetch with query parameters

const params = new URLSearchParams({
  search: "javascript",
  page: "2",
});

fetch("/api/users?" + params)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// URLSearchParams safely builds encoded query strings.
