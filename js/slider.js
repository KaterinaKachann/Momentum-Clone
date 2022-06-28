const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
const githubSelect = document.querySelector(".radio-github");
const flickerSelect = document.querySelector(".radio-flicker");
const shuterSelect = document.querySelector(".radio-shuterstock");
const apiKeyFlicer = "84ff9646e550ec9ed8156ec235f705fd";

let bgNum = 1;

async function setBg() {
  const timeOfDay = getDay();
  if (githubSelect.checked) {
    const img = new Image();
    img.src = `https://katerinakachann.github.io/Momentum-Clone/assets/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
      body.style.backgroundImage = `url(https://katerinakachann.github.io/Momentum-Clone/assets/${timeOfDay}/${bgNum}.jpg)`;
    };
  }
  if (flickerSelect.checked) {
  console.log('flicker')
  }
  if (shuterSelect.checked) {
    console.log("shuter");
  }
}
setBg();

slideNext.addEventListener("click", function getSlideNext() {
  if (bgNum >= 1) {
    bgNum++;
  }
  if (bgNum == 5) {
    bgNum = 0;
    bgNum++;
  }
  setBg();
});

slidePrev.addEventListener("click", function getSlidePrev() {
  if (bgNum == 1) {
    bgNum = 6;
    bgNum--;
  }
  if (bgNum <= 6) {
    bgNum--;
  }
  setBg();
});

githubSelect.addEventListener("change", setBg);
flickerSelect.addEventListener("click", setBg);
shuterSelect.addEventListener("change", setBg);
