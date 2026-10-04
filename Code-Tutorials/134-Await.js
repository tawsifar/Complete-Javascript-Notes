// await

function getData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data received");
    }, 1000);
  });
}

async function showData() {
  const data = await getData();
  console.log(data);
}

showData();

// await pauses the async function until the Promise settles.
// await can be used inside an async function.
