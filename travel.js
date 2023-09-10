var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
const video = document.getElementById("theVideo");
const playButton = document.getElementById("playButton");

video.addEventListener("timeupdate", () => {
  if (video.currentTime >= 6.6) {
    video.pause();
    playButton.style.display = "block";
  }
});

