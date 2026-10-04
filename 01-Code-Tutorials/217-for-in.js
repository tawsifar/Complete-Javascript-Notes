// for...in

const user = {
  name: "Tawsif",
  age: 18,
};

for (const key in user) {
  console.log(key, user[key]);
}

// for...in iterates over enumerable property keys.
// Use for...of for iterable values such as arrays.
