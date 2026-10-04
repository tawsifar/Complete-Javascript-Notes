// Function scope
function greet() {
    const message = "Hello";

    console.log(message);
}

greet();

// Block scope
if (true) {
    let age = 18;
    const userName = "Tawsif";

    console.log(age);
    console.log(userName);
}

// var is not block-scoped
if (true) {
    var oldStyle = "Available outside the block";
}

console.log(oldStyle);

// let and const are block-scoped inside a function
function test() {
    if (true) {
        let x = 10;
        var y = 20;
    }

    console.log(y);
}

test();

// Nested function scope
function outer() {
    const x = 10;

    function inner() {
        const y = 20;

        console.log(x);
        console.log(y);
    }

    inner();
}

outer();
