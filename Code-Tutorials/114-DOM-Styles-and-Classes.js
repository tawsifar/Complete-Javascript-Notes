// DOM styles and classes

const box = document.querySelector("#box");

box.style.backgroundColor = "black";
box.style.padding = "20px";

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("selected");

console.log(box.classList.contains("active"));

// classList is usually cleaner than changing many inline styles.
