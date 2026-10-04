// Basic nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}

// Outer and inner loop
for (let i = 1; i <= 2; i++) {
    console.log("Outer:", i);

    for (let j = 1; j <= 3; j++) {
        console.log("Inner:", j);
    }
}

// Multiplication values
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(i * j);
    }
}

// Pattern
for (let i = 1; i <= 3; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
