// El styles lo importamos aquí, ya se carga después al compilar todo

import '../scss/styles.scss';
import { toggleMenuElement } from './dom';
import { toggleMenu } from './menu';

toggleMenuElement.addEventListener('click', toggleMenu);
