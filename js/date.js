const time = document.querySelector(".time");
const date = document.querySelector(".date");
const welcome = document.querySelector(".greeting");
const inputValue = document.querySelector("#name");

let timeValue = new Date();

function setTime() {
  const currentTime = timeValue.toLocaleTimeString("en-US", { hour12: false });
  time.textContent = currentTime;
  setTimeout(setTime, 1000);
}

function setDate() {
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = timeValue.toLocaleDateString("en-US", options);
  date.textContent = currentDate;
}

function getDay() {
  if (6 <= timeValue.getHours() && timeValue.getHours() < 12) {
    return "morning";
  }
  if (12 <= timeValue.getHours() && timeValue.getHours() < 18) {
    return "afternoon";
  }
  if (18 <= timeValue.getHours() && timeValue.getHours() < 24) {
    return "evening";
  }
  if (0 <= timeValue.getHours() && timeValue.getHours() < 6) {
    return "night";
  }
}

welcome.textContent = `Good ${getDay()}`;

inputValue.addEventListener("blur", function (e) {
  localStorage.setItem("name", e.target.value);
});
inputValue.value = localStorage.getItem("name");

setTime();
setDate();
