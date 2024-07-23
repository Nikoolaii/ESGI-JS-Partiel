export function displayChapitreNb() {
  const articles = document.querySelectorAll('article')
  const chapitreNumber = document.querySelector('#chapitreSelection')
  chapitreNumber.innerHTML = articles.length + ' chapitres'
}

export function startTimer() {
  setInterval(() => {
    if (!localStorage.getItem('timer') || localStorage.getItem('timer') === 'null') {
      localStorage.setItem('timer', JSON.stringify({ minutes: 0, seconds: 0 }))
    }

    let { minutes, seconds } = JSON.parse(localStorage.getItem('timer'))
    const timer = document.querySelector('#timerSelection')
    timer.innerHTML = `${minutes} min ${seconds} sec`
    seconds++

    if (seconds === 60) {
      seconds = 0
      minutes++
    }
    timer.innerHTML = `${minutes} min ${seconds} sec`

    if (minutes === 10) {
      timer.style.color = 'red'
    }

    localStorage.setItem('timer', JSON.stringify({ minutes, seconds }))
  }, 1000)
}
