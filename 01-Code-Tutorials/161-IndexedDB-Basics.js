// IndexedDB basics

const request = indexedDB.open("AppDatabase", 1);

request.onupgradeneeded = function (event) {
  const database = event.target.result;

  if (!database.objectStoreNames.contains("users")) {
    database.createObjectStore("users", {
      keyPath: "id"
    });
  }
};

request.onsuccess = function (event) {
  const database = event.target.result;
  console.log("Database opened:", database.name);
};

request.onerror = function () {
  console.log("Database failed to open");
};

// IndexedDB provides structured client-side storage.
// It is useful for larger or more complex browser data.
