// Basic else if
let score = 75;

if (score >= 80) {
    console.log("A");
} else if (score >= 70) {
    console.log("B");
} else {
    console.log("C");
}

// Multiple conditions
let age = 25;

if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// Order matters
let result = 85;

if (result >= 80) {
    console.log("Excellent");
} else if (result >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Practical example
let temperature = 35;

if (temperature >= 40) {
    console.log("Very Hot");
} else if (temperature >= 30) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Comfortable");
} else {
    console.log("Cold");
}
