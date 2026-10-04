// WeakMap stores object keys without preventing garbage collection.

const user = { name: "Rahin" };

const privateData = new WeakMap();

privateData.set(user, { role: "Developer" });

console.log(privateData.get(user));

// WeakSet stores objects weakly and only stores objects.

const activeUsers = new WeakSet();

activeUsers.add(user);

console.log(activeUsers.has(user));

// WeakMap and WeakSet are useful for object-associated data
// that should not keep objects alive unnecessarily.
