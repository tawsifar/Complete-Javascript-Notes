// Form events

const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  console.log("Submitted:", name);
});

// submit is commonly handled with preventDefault()
// when the form should be processed with JavaScript.
