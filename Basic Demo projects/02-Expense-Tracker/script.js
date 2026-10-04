const transactions = [];

const form = document.querySelector("#form");
const list = document.querySelector("#list");

function formatMoney(value) {
  return "৳" + value.toLocaleString("en-BD");
}

function render() {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const expenses = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  document.querySelector("#income").textContent = formatMoney(income);
  document.querySelector("#expenses").textContent = formatMoney(expenses);
  document.querySelector("#balance").textContent = formatMoney(income - expenses);

  list.innerHTML = transactions.length
    ? transactions.map((item) => `
        <div class="transaction">
          <div>
            <strong>${item.title}</strong>
            <small>${item.type}</small>
          </div>
          <strong class="${item.type}">
            ${item.type === "income" ? "+" : "-"}${formatMoney(item.amount)}
          </strong>
        </div>
      `).join("")
    : "<p>No transactions yet.</p>";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  transactions.unshift({
    title: document.querySelector("#title").value.trim(),
    amount: Number(document.querySelector("#amount").value),
    type: document.querySelector("#type").value
  });

  form.reset();
  render();
});

render();