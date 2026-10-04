// Basic break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

// Search with break
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 30) {
        console.log("Found");
        break;
    }
}

// Break in while loop
let count = 1;

while (count <= 10) {
    if (count === 6) {
        break;
    }

    console.log(count);
    count++;
}
