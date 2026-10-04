const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);

const product = numbers.reduce((result, number) => {
    return result * number;
}, 1);

console.log(product);

const scores = [80, 90, 70];

const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(average);