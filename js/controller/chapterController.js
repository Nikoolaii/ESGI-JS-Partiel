import { toggleChapter } from "../events/toggleChapter.js"

export function chapterVisibility() {
  const chapters = document.querySelectorAll('article')
  chapters.forEach(chapter => {
    toggleChapter(chapter)
  })
}