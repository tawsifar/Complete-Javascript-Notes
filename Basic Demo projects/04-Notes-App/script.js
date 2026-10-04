const form = document.querySelector("#form");
const notesElement = document.querySelector("#notes");

let notes = JSON.parse(localStorage.getItem("quicknotes") || "[]");

function save() {
  localStorage.setItem("quicknotes", JSON.stringify(notes));
}

function render() {
  notesElement.innerHTML = notes.length
    ? notes.map((note) => `
      <article class="note">
        <h2>${escapeHtml(note.title)}</h2>
        <p>${escapeHtml(note.body)}</p>
        <button onclick="deleteNote('${note.id}')">Delete</button>
      </article>
    `).join("")
    : "<p>No notes yet.</p>";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  save();
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  notes.unshift({
    id: crypto.randomUUID(),
    title: document.querySelector("#title").value.trim(),
    body: document.querySelector("#body").value.trim()
  });

  save();
  form.reset();
  render();
});

render();