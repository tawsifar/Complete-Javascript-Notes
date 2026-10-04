// Event delegation

const list = document.querySelector("#list");

list.addEventListener("click", function (event) {
  if (event.target.matches("li")) {
    console.log("Clicked:", event.target.textContent);
  }
});

// One parent listener can handle events from many child elements.
