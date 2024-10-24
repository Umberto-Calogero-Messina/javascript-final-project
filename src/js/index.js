// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
import { toggleMenuElement } from './dom';
import { toggleMenu } from './menu';
import { GAMES } from './game';
import { newsData } from './newsData';

const createGameCard = ({ title, imgSrc, desc, link }) => {
  const linkElement = document.createElement('a');
  linkElement.className = 'gaming__link';
  linkElement.href = link;
  linkElement.target = '_blank';
  // linkElement.textContent = 'Play';

  const card = document.createElement('div');
  card.className = 'gaming__container';

  const titleElement = document.createElement('h3');
  titleElement.className = 'gaming__title';
  titleElement.textContent = title;

  const imgElement = document.createElement('img');
  imgElement.className = 'gaming__img';
  imgElement.src = imgSrc;
  imgElement.alt = title;

  card.appendChild(titleElement);
  card.appendChild(imgElement);
  linkElement.appendChild(card);

  return linkElement;
};

const gamingContainer = document.getElementById('gaming-container');
const fragment = document.createDocumentFragment();

GAMES.forEach(game => fragment.append(createGameCard(game)));
if (gamingContainer) {
  gamingContainer.append(fragment);
}

toggleMenuElement.addEventListener('click', toggleMenu);
const createCard = ({ date, status, title, text }) => {
  const card = document.createElement('div');
  card.className = 'card';

  const review = document.createElement('span');
  review.className = 'card__review';
  review.innerHTML = `${date} / in <span class="card__span">${status}</span>`;

  const cardTitle = document.createElement('h2');
  cardTitle.className = 'card__title';
  cardTitle.textContent = title;

  const cardText = document.createElement('p');
  cardText.className = 'card__text';
  cardText.textContent = text;

  card.appendChild(review);
  card.appendChild(cardTitle);
  card.appendChild(cardText);

  return card;
};

const newsContainer = document.getElementById('news-container');

newsData.forEach(data => {
  const card = createCard(data);
  if (newsContainer) {
    newsContainer.appendChild(card);
  }
});

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

const latestNews = newsData.slice(0, 3);
const latestContainer = document.getElementById('latest_news');

if (latestContainer) {
  latestContainer.innerHTML = '';

  latestNews.forEach(({ date, status, title, text }) => {
    const card = document.createElement('div');
    card.className = 'card';

    const reviewElement = document.createElement('span');
    reviewElement.className = 'card__review';
    reviewElement.innerHTML = `${date} / in <span class="card__span">${status}</span>`;

    const titleElement = document.createElement('h2');
    titleElement.className = 'card__title';
    titleElement.textContent = title;

    const textElement = document.createElement('p');
    textElement.className = 'card__text';
    textElement.textContent = text;

    card.appendChild(reviewElement);
    card.appendChild(titleElement);
    card.appendChild(textElement);

    latestContainer.appendChild(card);
  });
}
