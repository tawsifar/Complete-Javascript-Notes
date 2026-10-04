const numbers = [10, 20, 30, 40];

// Run a function for each element
numbers.forEach(function (number) {
    console.log(number);
});

// Arrow function callback
numbers.forEach((number) => {
    console.log(number * 2);
});

// Access value and index
numbers.forEach((number, index) => {
    console.log(index, number);
});

// forEach() does not create a new array
const result = numbers.forEach((number) => {
    return number * 2;
});

console.log(result);
