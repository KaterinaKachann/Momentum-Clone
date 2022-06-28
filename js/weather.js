const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const windDescription = document.querySelector(".wind");
const humidityDescription = document.querySelector(".humidity");
const city = document.querySelector(".city");
const error = document.querySelector(".weather-error");
const weather = document.querySelector(".weather");

city.value = "Tbilisi";

async function getWeather() {
  if (btnLangOne.checked) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=79ad3ce9c7daf1a5ea4e76c35bada7c7&units=metric`;

    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();

      temperature.textContent = `Temperature: ${Math.floor(data.main.temp)}°C`;
      windDescription.textContent = `Wind speed: ${Math.floor(
        data.wind.speed
      )} m/s`;
      humidityDescription.textContent = `Humidity: ${data.main.humidity} %`;
      error.textContent = "";
    } else {
      error.textContent = `City not found '${city.value}'`;
      temperature.innerHTML = "";
      weatherDescription.innerHTML = "";
      windDescription.innerHTML = "";
      humidityDescription.innerHTML = "";
      weatherIcon.remove();
    }
  }

  if (btnLangTwo.checked) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=79ad3ce9c7daf1a5ea4e76c35bada7c7&units=metric`;

    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();

      temperature.textContent = `Температура: ${Math.floor(data.main.temp)}°C`;
      windDescription.textContent = `Скорость ветра: ${Math.floor(
        data.wind.speed
      )} м/с`;
      humidityDescription.textContent = `Влажность: ${data.main.humidity} %`;
      error.textContent = "";
    } else {
      error.textContent = `Город не найден '${city.value}'`;
      temperature.innerHTML = "";
      weatherDescription.innerHTML = "";
      windDescription.innerHTML = "";
      humidityDescription.innerHTML = "";
      weatherIcon.remove();
    }
  }
}
getWeather();

btnLangOne.addEventListener("change", getWeather);
btnLangTwo.addEventListener("change", getWeather);

city.addEventListener("change", function (event) {
  getWeather(event.target.value);
});

function setLocalStorage() {
  localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
}

window.addEventListener("load", getLocalStorage);
