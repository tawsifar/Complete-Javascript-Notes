// Array.from()

const text = "ABC";

const letters = Array.from(text);

console.log(letters);

const numbers = Array.from({ length: 5 }, function (_, index) {
  return index + 1;
});

console.log(numbers);

// Array.from() creates an array from an iterable or array-like value.
