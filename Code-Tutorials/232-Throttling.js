// Throttling

function throttle(callback, delay) {
  let waiting = false;

  return function (...args) {
    if (waiting) {
      return;
    }

    waiting = true;
    callback(...args);

    setTimeout(function () {
      waiting = false;
    }, delay);
  };
}

const handleScroll = throttle(function () {
  console.log("Scroll handled");
}, 200);

window.addEventListener("scroll", handleScroll);

// Throttling limits how often a callback can run.
