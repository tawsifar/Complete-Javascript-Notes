// Debouncing

function debounce(callback, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(function () {
      callback(...args);
    }, delay);
  };
}

const search = debounce(function (value) {
  console.log("Search:", value);
}, 300);

search("JavaScript");

// Debouncing waits until calls stop for the given delay.
