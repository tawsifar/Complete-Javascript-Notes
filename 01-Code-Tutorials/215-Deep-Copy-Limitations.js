// Deep-copy limitations

const original = {
  date: new Date(),
  values: new Map([["a", 1]]),
};

const copy = structuredClone(original);

console.log(copy.date instanceof Date);
console.log(copy.values instanceof Map);

// Deep-copy techniques have different capabilities.
// structuredClone() preserves many built-in data types,
// but functions and some special values cannot be cloned.
