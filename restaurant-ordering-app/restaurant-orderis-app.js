import { menuArray } from "./data.js";

const menuContainer = document.getElementById('menu')
const menu = menuArray.map(item => {
  const { name, ingredients, id, price, emoji } = item;
  return `
    <section class="menu-item">
      <p class="item-icon">${emoji}</p>
      <div class="item-info">
        <h3 class="item-title">${name}</h3>
        <p class="item-description">${ingredients.join(', ')}</p>
        <p class="item-price">$${price}</p>
      </div>
      <button class="add-btn" id="${id}">+</button>
    </section>
  `
}).join('');

document.addEventListener('click', event => {
  console.log(event.target.id)
});

menuContainer.innerHTML = menu;