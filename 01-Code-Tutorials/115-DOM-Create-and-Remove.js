// Creating and removing DOM elements

const list = document.querySelector("#list");

const item = document.createElement("li");
item.textContent = "New item";

list.append(item);

const firstItem = list.querySelector("li");

if (firstItem) {
  firstItem.remove();
}

// createElement() creates an element.
// append() inserts it.
// remove() removes it.
