import { startVideo, fullscreenVideo, resetVideo, setProgress } from '../controller/videoController.js';

export function videoEvent() {
  const videoPlayer = document.querySelector('#video-play');
  const videoReset = document.querySelector('#video-reset');
  const videoFullScreen = document.querySelector('#video-fullscreen');

  const progressInterval = setInterval(setProgress, 1000);

  videoPlayer.addEventListener('click', startVideo);
  videoReset.addEventListener('click', resetVideo);
  videoFullScreen.addEventListener('click', fullscreenVideo);

}