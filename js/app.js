import { displayChapitreNb, startTimer } from './controller/infoController.js'
import { chapterVisibility } from './controller/chapterController.js'
import { videoEvent } from './events/videoEvent.js'
import { konamiCodeDetection } from './events/inputEvent.js'

function initApp() {
  displayChapitreNb()
  startTimer()
  chapterVisibility()
  videoEvent()
  konamiCodeDetection()
}

initApp()