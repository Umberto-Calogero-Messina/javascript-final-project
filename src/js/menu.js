import { menuElement, topBarElement } from './dom';

const toggleMenu = () => {
  menuElement.classList.toggle('menu--show');
  topBarElement.classList.toggle('top-bar--open');
};

export { toggleMenu };
