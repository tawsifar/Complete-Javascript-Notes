// DOM events basics

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  console.log("Button clicked");
});

// The callback runs when the event happens.
// addEventListener() is the standard way to attach event handlers.
