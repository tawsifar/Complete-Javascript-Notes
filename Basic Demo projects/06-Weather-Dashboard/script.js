const form = document.querySelector("#form");
const weather = document.querySelector("#weather");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = document.querySelector("#city").value.trim();
  if (!city) return;

  weather.innerHTML = "<p>Loading...</p>";

  try {
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
    );

    if (!geoResponse.ok) throw new Error("Could not find the city");

    const geoData = await geoResponse.json();
    const location = geoData.results?.[0];

    if (!location) throw new Error("City not found");

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    if (!weatherResponse.ok) throw new Error("Weather request failed");

    const data = await weatherResponse.json();
    const current = data.current;

    weather.innerHTML = `
      <div class="weather-main">
        <div>
          <h2>${location.name}, ${location.country_code}</h2>
          <p>Current conditions</p>
        </div>
        <div class="temp">${Math.round(current.temperature_2m)}°C</div>
      </div>
      <div class="details">
        <div class="detail"><small>Humidity</small><strong>${current.relative_humidity_2m}%</strong></div>
        <div class="detail"><small>Wind</small><strong>${current.wind_speed_10m} km/h</strong></div>
        <div class="detail"><small>Coordinates</small><strong>${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)}</strong></div>
      </div>
    `;
  } catch (error) {
    weather.innerHTML = `<p>${error.message}</p>`;
  }
});