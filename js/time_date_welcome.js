const time = document.querySelector(".time");
const date = document.querySelector(".date");
const welcome = document.querySelector(".greeting");
const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");

let start = 1 + Math.floor(Math.random() * 20);


//Указатель времени
function showTime() {
  const hour = new Date();
  const currentTime = hour.toLocaleTimeString("en-US", { hour12: false });
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  showDate();
  showWelcome();
    getSelectValue();
}
showTime();

//Указатель даты
function showDate() {
  let day = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = day.toLocaleDateString("en-US", options);
  date.textContent = currentDate;
  changeData()
}



function getTimeOfDay() {
  let dateWel = new Date();
  let timeWel = dateWel.getHours();
  if (6 <= timeWel && timeWel < 12) {
    return "Morning";
  }
  if (12 <= timeWel && timeWel < 18) {
    return "Afternoon";
  }
  if (18 <= timeWel && timeWel < 24) {
    return "Evening";
  }
  if (0 <= timeWel && timeWel < 6) {
    return "Night";
  }
}
getTimeOfDay();

//Указатель пожелания
function showWelcome() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  welcome.textContent = greetingText;
  getSelectValue()
}
showWelcome();

//Сохранение информации
function setLocalStorage() {
  const name = document.querySelector(".name");
  localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  const name = document.querySelector(".name");
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);

//Cлайдер изображений
function setBg() {
  const timeOfDay = getTimeOfDay();
  let bgNum = start.toString().padStart(2, "0");
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/KaterinaKachann/Momentum-image/assets/assets/${timeOfDay}/${bgNum}.webp`;
  img.onload = () => {
    body.style.backgroundImage = `url(https://raw.githubusercontent.com/KaterinaKachann/Momentum-image/assets/assets/${timeOfDay}/${bgNum}.webp)`;
  };
}
setBg();

//Кнопки слайдера
slideNext.addEventListener("click", function getSlideNext() {
  if (start <= 21) {
    start++;
  }
  if(start == 21){
   start = 00;
   start++;
  }
  setBg();
});

slidePrev.addEventListener("click", function getSlidePrev() {
  if(start <= 1 && start == 1){
    start = 21;
    start--;
  }
if(start <= 20){
  start --
}

setBg();
});
