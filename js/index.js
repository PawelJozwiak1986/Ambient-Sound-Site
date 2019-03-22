const playButton = document.querySelector('.play-pause__btn');
const audio = new Audio('./assets/audio.mp3');
const bgImage = document.querySelector('body');

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




function randombg(){
  var random= Math.floor(Math.random() * 17) + 0;
  var bigSize = ["url('./assets/1.jpg')",
                 "url('./assets/2.jpg')",
                 "url('./assets/3.jpg')",
                 "url('./assets/4.jpg')",
                 "url('./assets/5.jpg')",
                 "url('./assets/6.jpg')",
                 "url('./assets/7.jpg')",
                 "url('./assets/8.jpg')",
                 "url('./assets/9.jpg')",
                 "url('./assets/10.jpg')",
                 "url('./assets/11.jpg')",
                 "url('./assets/12.jpg')",
                 "url('./assets/13.jpg')",
                 "url('./assets/14.jpg')",
                 "url('./assets/15.jpg')",
                 "url('./assets/16.jpg')",                
                 "url('./assets/17.jpg')",
                ];
  document.body.style.backgroundImage=bigSize[random];

};

window.setInterval(randombg, 15000);
