// Intl date formatting

const date = new Date("2026-10-04");

const formatted = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
}).format(date);

console.log(formatted);

// Intl.DateTimeFormat formats dates using locale-aware rules.
