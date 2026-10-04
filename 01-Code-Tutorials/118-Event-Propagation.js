// Event propagation

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", function () {
  console.log("Parent clicked");
});

child.addEventListener("click", function () {
  console.log("Child clicked");
});

// Events can move through the DOM during propagation.
// Bubbling is the common default behavior.
