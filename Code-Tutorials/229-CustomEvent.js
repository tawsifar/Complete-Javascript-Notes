// Custom events

const event = new CustomEvent("user:created", {
  detail: {
    id: 101,
  },
});

document.addEventListener("user:created", function (event) {
  console.log(event.detail.id);
});

document.dispatchEvent(event);

// CustomEvent lets application code communicate through custom events.
