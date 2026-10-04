const state = {
  tasks: [
    { id: 1, title: "Design landing page", status: "todo" },
    { id: 2, title: "Connect API", status: "progress" },
    { id: 3, title: "Write README", status: "done" }
  ]
};

function render() {
  const columns = ["todo", "progress", "done"];

  columns.forEach((status) => {
    const container = document.querySelector("#" + status);
    container.innerHTML = "";

    state.tasks
      .filter((task) => task.status === status)
      .forEach((task) => {
        const card = document.createElement("article");
        card.className = "task";
        card.innerHTML = `
          <strong>${task.title}</strong>
          <small>Task #${task.id}</small>
          <div class="task-actions">
            ${status !== "todo" ? `<button onclick="moveTask(${task.id}, 'todo')">To Do</button>` : ""}
            ${status !== "progress" ? `<button onclick="moveTask(${task.id}, 'progress')">Progress</button>` : ""}
            ${status !== "done" ? `<button onclick="moveTask(${task.id}, 'done')">Done</button>` : ""}
            <button onclick="deleteTask(${task.id})">Delete</button>
          </div>
        `;
        container.append(card);
      });

    document.querySelector("#" + status + "Count").textContent =
      state.tasks.filter((task) => task.status === status).length;
  });
}

function moveTask(id, status) {
  const task = state.tasks.find((item) => item.id === id);
  if (task) task.status = status;
  render();
}

function deleteTask(id) {
  state.tasks = state.tasks.filter((task) => task.id !== id);
  render();
}

document.querySelector("#addTask").addEventListener("click", () => {
  const title = prompt("Task title:");
  if (!title?.trim()) return;

  state.tasks.push({
    id: Date.now(),
    title: title.trim(),
    status: "todo"
  });

  render();
});

render();