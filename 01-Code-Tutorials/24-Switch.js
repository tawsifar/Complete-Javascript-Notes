// Basic switch
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

// Break prevents fall-through
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("Apple");
        break;

    case "banana":
        console.log("Banana");
        break;

    default:
        console.log("Unknown fruit");
}

// Default case
let role = "guest";

switch (role) {
    case "admin":
        console.log("Admin");
        break;

    case "user":
        console.log("User");
        break;

    default:
        console.log("Guest");
}

// Multiple cases
let currentDay = "Saturday";

switch (currentDay) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}
