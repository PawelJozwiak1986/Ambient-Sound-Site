const playButton = document.querySelector('.play-pause__btn');
const audio = new Audio('./assets/audio.mp3');

let playAudio = () => {
  audio.play()
};
