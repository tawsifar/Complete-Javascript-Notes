// Browser storage cleanup

localStorage.setItem("name", "Tawsif");
localStorage.setItem("theme", "dark");

localStorage.removeItem("name");

// Remove everything stored by the current origin:
// localStorage.clear();

// sessionStorage.clear() removes all session storage.

// Use clear() carefully because it removes all entries.
