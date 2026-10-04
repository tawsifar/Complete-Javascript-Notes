// Basic continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Skip even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

// Skip negative numbers
let numbers = [10, -5, 20, -3, 30];

for (let number of numbers) {
    if (number < 0) {
        continue;
    }

    console.log(number);
}
