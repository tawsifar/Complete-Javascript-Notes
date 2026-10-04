// localStorage

localStorage.setItem("name", "Tawsif");

const name = localStorage.getItem("name");
console.log(name);

localStorage.removeItem("name");

// localStorage stores data as strings.
// Data remains available after the browser is closed.
