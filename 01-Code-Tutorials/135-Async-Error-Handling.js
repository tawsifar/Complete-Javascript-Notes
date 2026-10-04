// Error handling with async and await

function getData() {
  return Promise.reject(new Error("Request failed"));
}

async function loadData() {
  try {
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Finished");
  }
}

loadData();

// try...catch is commonly used with await.
// finally can be used for cleanup.
