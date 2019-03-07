const playButton = document.querySelector('.play-pause__btn');
const audio = new Audio('./assets/audio.mp3');


let playAudio = () => {
    
  if (audio.paused){
    playButton.src ='./assets/pause-button.jpg';
    audio.play()
  } else {
    playButton.src ='./assets/play-button.png';
    audio.pause();
  }  
};
