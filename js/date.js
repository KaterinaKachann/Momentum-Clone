const time = document.querySelector(".time");
const date = document.querySelector(".date");
const welcome = document.querySelector(".greeting");
const inputValue = document.querySelector("#name");


setInterval(function setTime(){
  const hour = new Date();
  time.textContent = hour.toLocaleTimeString("en-US", { hour12: false })
}, 1000);

function setDate() {
  let dateValue = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const currentDate = dateValue.toLocaleDateString("en-US", options);
  date.textContent = currentDate;
}
setDate();


function getDay() {
  let timeValue = new Date();
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


