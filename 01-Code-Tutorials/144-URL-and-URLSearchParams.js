// URL and URLSearchParams

const url = new URL("https://api.example.com/users");

url.searchParams.set("page", "2");
url.searchParams.set("limit", "10");

console.log(url.toString());

const params = new URLSearchParams({
  search: "javascript",
  sort: "newest"
});

console.log(params.toString());

// URL helps build and inspect complete URLs.
// URLSearchParams helps create query strings.
