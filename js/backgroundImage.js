const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");


function setBg() {
    const timeOfDay = getTimeOfDay();
    let bgNum = start.toString().padStart(2, "0");
    const img = new Image();
    img.src = `../assets/afternoon/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
    //   body.style.backgroundImage = 'url(../assets/afternoon/1.jpg)';
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
  