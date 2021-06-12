// Імпорт шаблонів
import cardsTemplate from '../template/template.hbs';
// Імпорт масиву даних
import menu from '../menu.json'

// Застосовуємо шаблон
const markup = cardsTemplate(menu);

// знаходимо і додаємо розмітку
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);