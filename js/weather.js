const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const windDescription = document.querySelector(".wind");
const humidityDescription = document.querySelector(".humidity");
const city = document.querySelector(".city");
const error = document.querySelector(".weather-error");
const weather = document.querySelector(".weather");

city.value = "Minsk";
// Выбор города
async function getWeather() {
  // const changeL = document.querySelector(".changeLang");
  let valueLang = changeLang.value;

  if (valueLang == "en") {
    // city.value = "Minsk";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=79ad3ce9c7daf1a5ea4e76c35bada7c7&units=metric`;

    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();

      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.floor(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].main;
      windDescription.textContent = `Wind speed: ${Math.floor(
        data.wind.speed
      )} m/s`;
      humidityDescription.textContent = `Humidity: ${data.main.humidity} %`;
    } else {
      error.textContent = `City not found '${city.value}'`;
      temperature.innerHTML = "";
      weatherDescription.innerHTML = "";
      windDescription.innerHTML = "";
      humidityDescription.innerHTML = "";
      weatherIcon.remove();
      return;
    }
  }

  if (valueLang == "ru") {
    // city.value = "Минск";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=79ad3ce9c7daf1a5ea4e76c35bada7c7&units=metric`;

    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();

      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.floor(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      windDescription.textContent = `Скорость ветра: ${Math.floor(
        data.wind.speed
      )} м/с`;
      humidityDescription.textContent = `Влажность: ${data.main.humidity} %`;
    } else {
      error.textContent = `Город не найден '${city.value}'`;
      temperature.innerHTML = "";
      weatherDescription.innerHTML = "";
      windDescription.innerHTML = "";
      humidityDescription.innerHTML = "";
      weatherIcon.remove();
      return;
    }
  }
}
getWeather();

changeLang.addEventListener("change", getWeather);

// Слушатель на изменение города
city.addEventListener("change", function (event) {
  getWeather(event.target.value);
});

// Сохранение текущего значения
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
