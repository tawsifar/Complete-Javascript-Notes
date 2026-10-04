// Geolocation API

navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
});

// Geolocation is permission-based and should be used only when needed.
