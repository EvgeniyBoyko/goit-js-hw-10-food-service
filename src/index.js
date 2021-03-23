import './styles.css';
import cardJson from './menu.json';
import cards from './card.hbs';
import onThemeSwitchToggle from './changeTheme.js'


const menuCards = document.querySelector('.js-menu');
const marcupCards = cards(cardJson);
menuCards.insertAdjacentHTML('beforeend', marcupCards);
