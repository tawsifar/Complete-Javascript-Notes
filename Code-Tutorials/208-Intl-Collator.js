// Intl.Collator

const names = ["Zara", "alice", "Bob"];

names.sort(new Intl.Collator("en", { sensitivity: "base" }).compare);

console.log(names);

// Intl.Collator provides locale-aware string comparison.
