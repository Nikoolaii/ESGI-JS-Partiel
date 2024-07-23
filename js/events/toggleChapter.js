
export function toggleChapter(chapter) {
  chapter.addEventListener('click', () => {
    const expanded = document.querySelector('.expanded')
    if (expanded || expanded == chapter) {
      expanded.classList.remove('expanded')
    } else {
      chapter.classList.add('expanded')
    }
  })
}