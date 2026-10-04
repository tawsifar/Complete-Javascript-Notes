// DOM security and XSS

const output = document.querySelector("#output");
const userInput = "<img src=x onerror=alert('XSS')>";

output.textContent = userInput;

// textContent inserts the value as text.
// Be careful with innerHTML when content comes from users.
// Never treat untrusted input as safe HTML by default.
