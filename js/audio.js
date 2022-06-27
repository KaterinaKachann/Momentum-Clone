import listSong from "./listSong.js";

const playPrev = document.querySelector(".play-prev");
const play = document.querySelector(".play");
const playNext = document.querySelector(".play-next");
const playList = document.querySelector(".play-list");

// const btnControls = document.querySelector('.player-controls');
// const durationTime = document.querySelector('.durationTime');
// const volume = document.querySelector('.volume');
// const progress = document.querySelector('.progress');
// const duration = document.querySelector('.duration');
// const title = document.querySelector('.title');
// const sound = document.querySelector('.sound');


const audio = new Audio();


let playNum = 0;
let isPlaying = false;

var player = document.querySelector('.player');  

player.addEventListener("timeupdate", function() {
    let currentTime = listSong.currentTime;
    let duration = listSong.duration;
    $('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
});

listSong.forEach(function (item, key) {
  let li = document.createElement("li");

  li.innerHTML = item.title;
  li.dataset.position = key;

  playList.appendChild(li);

});

// On audio playing and pause toggle values
function playAudio(event) {
    

    applyStyle(playNum)


    if (isPlaying == false) {
        audio.src = listSong[playNum].src
        audio.play();
        isPlaying = true;
        return;
    }

    if (isPlaying == true) {

        audio.pause();
        isPlaying = false;
        return;
    }
}

function applyStyle(index) {
    
    for (let item of playList.children) {
        item.classList.remove('active')
    }

    const element = playList.children[index];
    element.classList.add('active');
}

// Toggle values
function toggleBtn(event) {
  play.classList.toggle("pause");
}

function nextSong(event) {
        
    playNum == listSong.length-1 
        ? playNum = 0 
        : playNum++ ;

    
    audio.currentTime = 0;
    audio.src = listSong[playNum].src
    audio.play();
    applyStyle(playNum)

    if (!isPlaying) {
        isPlaying = true;
        play.classList.toggle("pause");
    }
    
}

function prevSong(event){
    
   playNum == 0
       ? playNum = listSong.length -1
       : playNum--;

  
    audio.currentTime = 0;
    audio.src = listSong[playNum].src
    audio.play();
    applyStyle(playNum)

    if (!isPlaying) {
        isPlaying = true;
        play.classList.toggle("pause");
    }

}



play.addEventListener("click", playAudio);
play.addEventListener("click", toggleBtn);
playNext.addEventListener("click", nextSong);
playPrev.addEventListener("click", prevSong);
