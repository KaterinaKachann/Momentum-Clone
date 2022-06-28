const listSong = [
  {
    title: "Aqua Caelestis",
    src: "../assets/sounds/Aqua-Caelestis.mp3",
    duration: "00:40",
  },
  {
    title: "River Flows In You",
    src: "./assets/sounds/River-Flows-In-You.mp3",
    duration: "01:37",
  },
  {
    title: "Ennio Morricone",
    src: "./assets/sounds/Ennio-Morricone.mp3",
    duration: "01:37",
  },
];

const play = document.querySelector("#play");
const playList = document.querySelector(".play-list");
const itemMusic = document.querySelector(".item-music");
const playNext = document.querySelector(".play-next");
const playPrev = document.querySelector(".play-prev");
const player = document.querySelector(".player");
const timeLine = document.querySelector(".time-line");
const timerPast = document.querySelector(".timer-past");
const timerPresent = document.querySelector(".timer-present");

listSong.forEach(function (item, key) {
  let li = document.createElement("li");
  li.innerHTML = item.title;
  li.dataset.position = key;
  li.classList.add("item-music");

  playList.appendChild(li);
});

let audio = new Audio();
let count = 0;
let audioTime = Math.round(audio.currentTime);
timerPast.textContent = `00:0${audioTime}`;
timerPresent.textContent = `00:0${audioTime}`;

function setPlay() {
  if (audio.paused) {
    audioPlay = setInterval(function () {
      let audioTime = Math.round(audio.currentTime);
      let audioLength = Math.round(audio.duration);
      timeLine.style.width = (audioTime * 100) / audioLength + "%";

      if (audioLength >= 0) {
        timerPresent.textContent = `00:0${audioLength - audioTime}`;
      }
      if (audioLength >= 10) {
        timerPresent.textContent = `00:${audioLength - audioTime}`;
      }
      if (audioLength >= 60) {
        timerPresent.textContent = `01:${audioLength - 60 - audioTime}`;
      }
      if (audioTime >= 0) {
        timerPast.textContent = `00:0${audioTime}`;
      }
      if (audioTime >= 10) {
        timerPast.textContent = `00:${audioTime}`;
      }
      if (audioTime >= 60) {
        timerPast.textContent = `01:${audioTime - 60}`;
      }
      if (audioTime == audioLength && count < 3) {
        count++;
      }
      if (audioTime == audioLength && count >= 3) {
        count = 0;
      }
      if (audioTime == audioLength) {
        play.classList.remove("pause");
        play.classList.add("play");
      }
    }, 1000);
    audio.src = listSong[count].src;
    audio.play();
    play.classList.add("pause");
  } else {
    clearInterval(audioPlay);
    audio.pause();
    play.classList.remove("pause");
    play.classList.add("play");
  }
}

function nextSong() {
  count == listSong.length - 1 ? (count = 0) : count++;

  audio.currentTime = 0;
  audio.src = listSong[count].src;
  applyStyle(count);

  play.classList.remove("pause");
  play.classList.add("play");
}

function prevSong() {
  count == 0 ? (count = listSong.length - 1) : count--;
  audio.currentTime = 0;
  audio.src = listSong[count].src;
  audio.currentTime = 0;
  applyStyle(count);

  play.classList.remove("pause");
  play.classList.add("play");
}

function applyStyle() {
  for (let item of playList.children) {
    item.classList.remove("active");
  }
  const element = playList.children[count];
  element.classList.add("active");
}

applyStyle();

play.addEventListener("click", setPlay);
playNext.addEventListener("click", nextSong);
playPrev.addEventListener("click", prevSong);
