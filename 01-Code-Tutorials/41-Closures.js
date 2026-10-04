// Basic closure
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();

greet();

// Closure with private state
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();

// Independent closure state
const counter1 = createCounter();
const counter2 = createCounter();

counter1();
counter1();

counter2();

// Closure for data privacy
function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount();

account.deposit(500);

console.log(account.getBalance());
