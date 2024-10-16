import { menuElement } from './dom';

const toggleMenu = () => {
  menuElement.classList.toggle('menu--show');
};

export { toggleMenu };
