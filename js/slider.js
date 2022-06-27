const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
let bgNum = 1;
function setBg() {
  const timeOfDay = getDay();

  const img = new Image();
  img.src = `https://katerinakachann.github.io/Momentum-Clone/assets/${timeOfDay}/${bgNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url(https://katerinakachann.github.io/Momentum-Clone/assets/${timeOfDay}/${bgNum}.jpg)`;
  };
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
