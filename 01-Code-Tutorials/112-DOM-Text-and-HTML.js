// Changing DOM text and HTML

const title = document.querySelector("#title");

title.textContent = "New Title";
title.innerHTML = "<strong>Important Title</strong>";

// textContent treats the value as text.
// innerHTML parses the value as HTML.

// Prefer textContent when you only need to insert text.
