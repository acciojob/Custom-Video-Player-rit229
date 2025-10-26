/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Play/Pause Functionality
toggle.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚❚'; // Change to pause icon
  } else {
    video.pause();
    toggle.textContent = '►'; // Change to play icon
  }
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
  video.volume = e.target.value;
});

// Playback Rate Control
playbackRateSlider.addEventListener('input', (e) => {
  video.playbackRate = e.target.value;
});

// Skip Buttons
skipButtons.forEach(button => {
  button.addEventListener('click', () => {
    video.currentTime += parseFloat(button.dataset.skip);
  });
});

// Update Progress Bar
video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
});

// Seek Functionality
progress.addEventListener('click', (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
});
