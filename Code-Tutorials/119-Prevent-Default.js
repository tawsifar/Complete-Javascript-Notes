// Preventing default browser behavior

const link = document.querySelector("#link");

link.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Default action stopped");
});

// preventDefault() stops the browser's default action for an event.
