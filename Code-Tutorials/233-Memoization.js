// Memoization

function memoize(callback) {
  const cache = new Map();

  return function (value) {
    if (cache.has(value)) {
      return cache.get(value);
    }

    const result = callback(value);
    cache.set(value, result);
    return result;
  };
}

const square = memoize(function (number) {
  return number * number;
});

console.log(square(5));
console.log(square(5));

// Memoization stores previous results to avoid repeated work.
