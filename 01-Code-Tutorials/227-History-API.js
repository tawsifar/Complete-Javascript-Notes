// History API

history.pushState({ page: 2 }, "", "/page-2");

console.log(location.pathname);

history.back();

// pushState() changes the URL without a full page reload.
// Browser navigation can be handled with the popstate event.
