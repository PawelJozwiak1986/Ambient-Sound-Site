const playButton = document.querySelector('.play-pause__btn');
const audio = new Audio('./assets/audio.mp3');

/////////// Play/Pause button /////////////
let playAudio = () => {
  if (audio.paused){
    playButton.src ='./assets/pause-button.png';
    audio.play()
  } else {
    playButton.src ='./assets/play-button.png';
    audio.pause();
  }  
  volume__slider.addEventListener("mousemove", setvolume); 
};
let setvolume =() =>{
  audio.volume = volume__slider.value / 100;
}

