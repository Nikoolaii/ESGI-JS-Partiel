import { detectKonami } from '../controller/konamiCodeController.js';

export function konamiCodeDetection() {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let index = 0;

  document.addEventListener('keydown', (event) => {
    if (event.key === konamiCode[index]) {
      index++;
      if (index === konamiCode.length) {
        detectKonami();
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}