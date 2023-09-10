var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const playBtn = document.getElementById("play-button2");
const video = document.getElementById("theVideo");
const playButton = document.getElementById("playButton");
playBtn.addEventListener("click", () => {
  video.play();
  playBtn.style.display = "none";

});

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 10.60) {
    video.pause();
 playButton.style.display = "block";
  }

});

