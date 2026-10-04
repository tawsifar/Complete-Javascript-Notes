const url = "https://example.com";

console.log(url.startsWith("https://"));
console.log(url.startsWith("http://"));

console.log(url.endsWith(".com"));
console.log(url.endsWith(".org"));

// Case-sensitive
const fileName = "profile.png";

console.log(fileName.endsWith(".png"));
console.log(fileName.endsWith(".PNG"));