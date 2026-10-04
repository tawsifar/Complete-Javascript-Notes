const form = document.querySelector("#searchForm");
const result = document.querySelector("#result");
const error = document.querySelector("#error");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  if (!username) return;

  result.classList.add("hidden");
  error.textContent = "Loading...";

  try {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

    if (!response.ok) {
      throw new Error("GitHub user not found");
    }

    const user = await response.json();

    result.innerHTML = `
      <div class="profile">
        <img class="avatar" src="${user.avatar_url}" alt="${user.login}">
        <div>
          <h2>${user.name || user.login}</h2>
          <p>@${user.login}</p>
          <a href="${user.html_url}" target="_blank" rel="noopener">View GitHub Profile</a>
        </div>
      </div>
      <div class="stats">
        <div class="stat"><strong>${user.public_repos}</strong>Repos</div>
        <div class="stat"><strong>${user.followers}</strong>Followers</div>
        <div class="stat"><strong>${user.following}</strong>Following</div>
      </div>
      <p>${user.bio || "No public bio."}</p>
    `;

    error.textContent = "";
    result.classList.remove("hidden");
  } catch (err) {
    error.textContent = err.message;
  }
});