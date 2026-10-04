const form = document.querySelector("#form");
const list = document.querySelector("#list");

let habits = JSON.parse(localStorage.getItem("habits") || "[]");

function save() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function render() {
  list.innerHTML = habits.length
    ? habits.map((habit) => `
      <article class="habit">
        <div class="habit-top">
          <div>
            <h2>${habit.name}</h2>
            <p>${habit.days.filter(Boolean).length} of 7 days completed</p>
          </div>
          <button onclick="deleteHabit('${habit.id}')">Delete</button>
        </div>
        <div class="days">
          ${habit.days.map((done, index) =>
            `<button class="day ${done ? "done" : ""}" onclick="toggleDay('${habit.id}', ${index})">${index + 1}</button>`
          ).join("")}
        </div>
      </article>
    `).join("")
    : "<p>No habits yet.</p>";
}

function toggleDay(id, index) {
  const habit = habits.find((item) => item.id === id);
  if (!habit) return;
  habit.days[index] = !habit.days[index];
  save();
  render();
}

function deleteHabit(id) {
  habits = habits.filter((habit) => habit.id !== id);
  save();
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  habits.push({
    id: crypto.randomUUID(),
    name: document.querySelector("#habit").value.trim(),
    days: Array(7).fill(false)
  });

  save();
  form.reset();
  render();
});

render();