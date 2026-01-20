// IMPORTANT: replace with your own key if needed
const API_KEY = "b4a68069bd74e5d20a3927990598afd3";

const temperatureElement = document.getElementById("temperature");
const cityElement = document.getElementById("cityName");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");

cityInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    weathersearch();
  }
});

async function weathersearch() {
  const cityName = cityInput.value.trim();

  if (!cityName) {
    console.log("Please enter a city name.");
    return;
  }

  if (!API_KEY) {
    console.log("Missing API key.");
    return;
  }

  try {
    getWeatherBtn.disabled = true;

    const { lat, lon, displayName } = await fetchCoordinates(cityName);
    const weather = await fetchCurrentWeather(lat, lon);

    // Only update temperature and city name
    temperatureElement.textContent = `${weather.temperature ?? "--"}°C`;
    cityElement.textContent = displayName ?? "City";

    console.log("City:", displayName);
    console.log("Temperature (°C):", weather.temperature);
  } catch (error) {
    if (error.message === "City not found") {
      console.log("City not found. Try another city.");
    } else if (error.message === "Invalid API key") {
      console.log("Invalid API key.");
    } else {
      console.log("Unable to get weather right now.");
    }
  } finally {
    getWeatherBtn.disabled = false;
  }
}

async function fetchCoordinates(cityName) {
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    cityName
  )}&limit=1&appid=${API_KEY}`;

  const response = await fetch(geoUrl);
  if (!response.ok) {
    if (response.status === 401) throw new Error("Invalid API key");
    throw new Error("City not found");
  }

  const data = await response.json();
  const firstMatch = data?.[0];

  if (!firstMatch?.lat || !firstMatch?.lon) {
    throw new Error("City not found");
  }

  return {
    lat: firstMatch.lat,
    lon: firstMatch.lon,
    displayName: `${firstMatch.name}${firstMatch.state ? ", " + firstMatch.state : ""}, ${
      firstMatch.country
    }`,
  };
}

async function fetchCurrentWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 401) throw new Error("Invalid API key");
    throw new Error("Unable to fetch weather");
  }

  const data = await response.json();

  return {
    temperature: Math.round(data.main?.temp),
  };
}
