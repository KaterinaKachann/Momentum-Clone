let greetingTranslation = {
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



const changeLang = document.querySelector(".change-lang");

function getSelectValue() {
  const timeOfDay = getTimeOfDay();
  const result = document.querySelector(".greeting");
  let valueLang = changeLang.value;

  if (valueLang == "en") {
    let translate = greetingTranslation.en;

    let translateText = translate[timeOfDay];
    result.textContent = translateText;
    document.getElementById("enter").placeholder = "Type name here..";

    return;
  }
  if (valueLang == "ru") {
    let translate = greetingTranslation.ru;

    let translateText = translate[timeOfDay];
    result.textContent = translateText;
    document.getElementById("enter").placeholder = "Введите имя здесь..";

    return;
  }
}

function changeData() {
  let day = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  let valueLang = changeLang.value;
  if (valueLang == "en") {
    const currentDate = day.toLocaleDateString("en-US", options);
    date.textContent = currentDate;
  }
  if (valueLang == "ru") {
    const currentDate = day.toLocaleDateString("ru", options);
    date.textContent = currentDate;
  }
}

changeLang.addEventListener("change", getSelectValue);
changeLang.addEventListener("change", changeData);

