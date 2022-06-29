const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
const githubSelect = document.querySelector(".radio-github");
const flickerSelect = document.querySelector(".radio-flicker");

const apiKeyFlicer = "84ff9646e550ec9ed8156ec235f705fd";

let bgNum = 1;

async function getBg() {
  const timeOfDay = getDay();
  if (githubSelect.checked) {
    let urlGithub = `https://katerinakachann.github.io/Momentum-Clone/assets/${timeOfDay}/${bgNum}.jpg`;
    return urlGithub;
  }
  if (flickerSelect.checked) {
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKeyFlicer}&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    let response = await fetch(url);
    try {
      let data = await response.json();
      console.log(data);
      let serverId = data.photos.photo[bgNum].server;
      let id = data.photos.photo[bgNum].id;
      let secret = data.photos.photo[bgNum].secret;
      const urlImg = `https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
      return urlImg;
    } catch (err) {
      conaole.log(err);
    }
  }
}

function setBg() {
  const timeOfDay = getDay();
  const img = new Image();
  getBg(timeOfDay, bgNum).then((res) => {
    img.src = res;
    img.onload = () => {
      body.style.backgroundImage = `url(${img.src})`;
    };
  });
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

githubSelect.addEventListener("click", setBg);
flickerSelect.addEventListener("click", setBg);
