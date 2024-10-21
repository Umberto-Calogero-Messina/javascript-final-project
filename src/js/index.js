// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
import { toggleMenuElement } from './dom';
import { toggleMenu } from './menu';
import { GAMES } from './games.js';

const createGameCard = (game) => {
  return `
      <div class="gaming__container">
        <h3 class="gaming__title">${game.title}</h3>
        <img class="gaming__img" src="${game.imgSrc}" alt="${game.title}" />
        <p class="gaming__desc">${game.desc}</p>
        <a class="gaming__link" href="${game.link}">Play</a>
      </div>
    `;
};

const gamingContainer = document.getElementById('gaming-container');

GAMES.forEach((game) => {
  gamingContainer.innerHTML += createGameCard(game);
});

toggleMenuElement.addEventListener('click', toggleMenu);

// const words = ['Game On!', 'Quality!'];
// const span = document.getElementById('word');
// let wordIndex = 0;
// let letterIndex = 0;
// let deleting = false;

// function type() {
//   const currentWord = `¡${words[wordIndex]}`;
//   span.textContent = deleting ? currentWord.slice(0, --letterIndex) : currentWord.slice(0, ++letterIndex);

//   if (!deleting && letterIndex === currentWord.length) {
//     deleting = true;
//     setTimeout(type, 700);
//   } else if (deleting && letterIndex === 1) {
//     deleting = false;
//     wordIndex = (wordIndex + 1) % words.length;
//     setTimeout(type, 300);
//   } else {
//     const speed = deleting ? 100 : 150;
//     setTimeout(type, speed);
//   }
// }

// type();
