// JavaScript timers

const timeoutId = setTimeout(function () {
  console.log("Runs once");
}, 1000);

const intervalId = setInterval(function () {
  console.log("Runs repeatedly");
}, 1000);

setTimeout(function () {
  clearTimeout(timeoutId);
  clearInterval(intervalId);
}, 3500);

// setTimeout() runs once.
// setInterval() repeats until cleared.
