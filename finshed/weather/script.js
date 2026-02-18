Temperature = document.getElementById("Temperature-disply");
cityname = document.getElementById("cityname");
wetherinput = document.getElementById("weather_input");
weatherget = document.getElementById("getWeather");
speedwind = document.getElementById("windspeed");
const weatherbox = document.querySelector(".Weather-box");

weatherget.addEventListener("click", async function () {
  let city = wetherinput.value;

  if (!city) {
    alert("Enter a city name");
    return;
  }
  weatherbox.classList.add("active");
  // Get coordinates
  let geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
  );
  let geoData = await geoResponse.json();

  if (!geoData.results) {
    alert("City not found");
    return;
  }

  let { latitude, longitude } = geoData.results[0];

  // Get weather
  let weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
  );
  let weatherData = await weatherResponse.json();

  Temperature.textContent = weatherData.current_weather.temperature + "°C";

  cityname.textContent = geoData.results[0].name;
});
