// Transforming objects with Object.entries()

const prices = {
  apple: 100,
  banana: 50,
  orange: 80
};

const doubled = Object.fromEntries(
  Object.entries(prices).map(function ([name, price]) {
    return [name, price * 2];
  })
);

console.log(doubled);

// Object.entries() and Object.fromEntries() are useful
// for transforming object properties.
