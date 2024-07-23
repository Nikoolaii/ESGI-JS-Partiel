import { resetVideo } from '../controller/videoController.js'

export function detectKonami() {
  localStorage.setItem('timer', '{"minutes":0,"seconds":0}')
  const articles = document.querySelectorAll('article')
  articles.forEach(article => {
    article.classList.remove('expanded')
  })
  const video = document.querySelector('video')

  resetVideo()
}