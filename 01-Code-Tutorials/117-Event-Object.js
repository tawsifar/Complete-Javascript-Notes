// Event object

const button = document.querySelector("#button");

button.addEventListener("click", function (event) {
  console.log(event.type);
  console.log(event.target);
});

// The event object contains information about the event.
