// structuredClone()

const original = {
  name: "Tawsif",
  settings: {
    theme: "dark",
  },
};

const copy = structuredClone(original);

copy.settings.theme = "light";

console.log(original.settings.theme);
console.log(copy.settings.theme);

// structuredClone() creates a deep copy for supported structured-clone values.
