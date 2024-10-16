// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
import { toggleMenuElement } from './dom';
import { toggleMenu } from './menu';

const words = ['Game On!', 'Quality!'];
const span = document.getElementById('word');
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function type() {
  const currentWord = `¡${words[wordIndex]}`;
  span.textContent = deleting ? currentWord.slice(0, --letterIndex) : currentWord.slice(0, ++letterIndex);

  if (!deleting && letterIndex === currentWord.length) {
    deleting = true;
    setTimeout(type, 700);
  } else if (deleting && letterIndex === 1) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  } else {
    const speed = deleting ? 100 : 150;
    setTimeout(type, speed);
  }
}

type();

toggleMenuElement.addEventListener('click', toggleMenu);
