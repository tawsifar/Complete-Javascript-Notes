// Clipboard API

async function copyText() {
  await navigator.clipboard.writeText("Hello JavaScript");
  console.log("Copied");
}

copyText();

// Clipboard access normally requires a secure context and user permission.
