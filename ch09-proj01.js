const symbolPlay = "⯈";
const symbolPause = "❚ ❚";
const files = ["Nature-8399", "River-655", "Waterfall-941", "Wave-2737"];

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("vidPlayer");
  const stopBtn = document.getElementById("stop");
  const playBtn = document.getElementById("play");
  const aside = document.querySelector("aside");
  //Access rewind and forward buttons without adding IDs to the buttons
  const buttons = document.querySelectorAll("#controls button");
  const rewindBtn = buttons[0];
  const skipBtn = buttons[2];

  //Function to stop and reset time of video
  function vidStop() {
    video.pause();
    video.currentTime = 0;
    playBtn.textContent = symbolPlay;
  }

  //Function to skip video based on the parameter's dataset
  function vidSkip(btn) {
    video.currentTime += parseInt(btn.dataset.skip);
  }

  //Loop through files array and add images
  for (let file of files) {
    const img = document.createElement("img");
    img.src = `images/${file}.jpg`;

    //Event listener on img to switch video in player
    img.addEventListener("click", () => {
      vidStop();
      const vidSource = document.querySelector("source");
      vidSource.src = `videos/${file}.mp4`;
      video.load();
    });

    aside.appendChild(img);
  }

  //Event listener to play/pause video
  playBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playBtn.textContent = symbolPause;
    } else {
      video.pause();
      playBtn.textContent = symbolPlay;
    }
  });

  //Event listener to stop video
  stopBtn.addEventListener("click", () => {
    vidStop();
  });

  //Event listener to rewind video
  rewindBtn.addEventListener("click", () => {
    vidSkip(rewindBtn);
  });

  //Event listener to skip video forward
  skipBtn.addEventListener("click", () => {
    vidSkip(skipBtn);
  });
});
