// Intl number formatting

const number = 1234567.89;

const formatted = new Intl.NumberFormat("en-US").format(number);

console.log(formatted);

// Intl.NumberFormat formats numbers according to locale rules.
