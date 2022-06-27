let greetingTranslation = {
  ru: {
    Morning: "Доброе утро",
    Afternoon: "Добрый день",
    Evening: "Добрый вечер",
    Night: "Доброй ночи",
  },
  en: {
    Morning: "Good morning",
    Afternoon: "Good afternoon",
    Evening: "Good evening",
    Night: "Good night",
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

