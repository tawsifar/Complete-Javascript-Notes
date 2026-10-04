// Basic default parameter
function greet(name = "Guest") {
    console.log("Hello", name);
}

greet("Tawsif");
greet();

// Default parameter with another value
function calculatePrice(price, tax = 0.15) {
    return price + price * tax;
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.20));

// undefined uses the default value
function welcome(name = "Guest") {
    console.log(name);
}

welcome();
welcome(undefined);
welcome(null);
