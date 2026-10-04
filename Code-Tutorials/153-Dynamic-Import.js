// Dynamic import

async function loadModule() {
  const module = await import("./module.js");

  console.log(module);
}

loadModule();

// import() loads a module dynamically.
// It returns a Promise.
