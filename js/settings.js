let listGreeting = {
  ru: {
    morning: "Доброе утро",
    afternoon: "Добрый день",
    evening: "Добрый вечер",
    night: "Доброй ночи",
  },
  en: {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    night: "Good night",
  },
};

let modal = document.getElementById("modal-window");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let btnLangOne = document.querySelector("#radio-one");
let btnLangTwo = document.querySelector("#radio-two");

let spanGreeting = document.querySelector(".greeting");

function changeLang() {
  let day = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  if (btnLangOne.checked) {
    const currentDate = day.toLocaleDateString("en-US", options);
    date.textContent = currentDate;
    document.querySelector("#name").placeholder = "Enter name";
    document.querySelector(".title-settings").textContent = "Settings";
    document.querySelector(".title-language").textContent = "Choose language:";
    document.querySelector(".title-stock").textContent = "Choose stock:";
    spanGreeting.textContent = listGreeting.en[getDay()];
  }
  if (btnLangTwo.checked) {
    const currentDate = day.toLocaleDateString("ru", options);
    date.textContent = currentDate;
    document.querySelector("#name").placeholder = "Введите имя";
    document.querySelector(".title-settings").textContent = "Настройки";
    document.querySelector(".title-language").textContent = "Выберите язык:";
    document.querySelector(".title-stock").textContent = "Выберите сток:";
    spanGreeting.textContent = listGreeting.ru[getDay()];
  }
}

btnLangOne.addEventListener("change", changeLang);
btnLangTwo.addEventListener("change", changeLang);
