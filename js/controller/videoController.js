const video = document.querySelector('video')
const progress = document.querySelector('progress')

export function startVideo() {
  const videoPlayer = document.querySelector('#video-play')

  if (video.paused) {
    video.play()
    videoPlayer.querySelector('i').classList.remove('fa-play')
    videoPlayer.querySelector('i').classList.add('fa-pause')
  } else {
    video.pause();
    videoPlayer.querySelector('i').classList.remove('fa-pause')
    videoPlayer.querySelector('i').classList.add('fa-play')
  }
}

export function fullscreenVideo() {
  video.requestFullscreen()
}

export function resetVideo() {
  const videoPlayer = document.querySelector('#video-play')

  video.currentTime = 0;
  video.pause();
  videoPlayer.querySelector('i').classList.remove('fa-pause')
  videoPlayer.querySelector('i').classList.add('fa-play')
  progress.value = 0;
}

export function setProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progress.value = percent
}