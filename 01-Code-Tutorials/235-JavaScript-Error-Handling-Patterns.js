// Practical error-handling pattern

async function loadUser() {
  try {
    const response = await fetch("/api/user");

    if (!response.ok) {
      throw new Error("Request failed: " + response.status);
    }

    return await response.json();
  } catch (error) {
    console.error("Could not load user:", error);
    throw error;
  }
}

loadUser();

// Handle errors close to the operation when you can add useful context.
// Re-throw when a higher layer should decide what to do next.
