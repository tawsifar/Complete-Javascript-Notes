// Basic nested if
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    }
}

// Nested if with else
let userAge = 20;
let userHasID = false;

if (userAge >= 18) {
    if (userHasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Too young");
}

// Login example
let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
    if (isAdmin) {
        console.log("Admin dashboard");
    } else {
        console.log("User dashboard");
    }
} else {
    console.log("Please log in");
}

// Simple nested conditions can use &&
let adult = true;
let verified = true;

if (adult && verified) {
    console.log("Access granted");
}
