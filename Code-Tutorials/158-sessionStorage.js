// sessionStorage

sessionStorage.setItem("theme", "dark");

const theme = sessionStorage.getItem("theme");
console.log(theme);

sessionStorage.removeItem("theme");

// sessionStorage stores data for the current browser session.
