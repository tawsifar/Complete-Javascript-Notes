// Collect multiple arguments into an array
function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(sum(10, 20, 30));
console.log(sum(5, 10, 15, 20));

// Rest parameter with normal parameters
function introduce(name, ...skills) {
    console.log("Name:", name);
    console.log("Skills:", skills);
}

introduce("Tawsif", "JavaScript", "React", "Node.js");

// Rest parameter must be last
function test(a, b, ...rest) {
    console.log(a, b, rest);
}

test(10, 20, 30, 40);
