import { menuArray } from "./data.js";

let order = [];

// Creates menu
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
      <button class="add-btn" id="add" data-id=${id} aria-label="add ${name}">+</button>
    </section>
  `
}).join('');

document.getElementById('menu').innerHTML += menu;

// Event listener to listen to click events on entire document
document.addEventListener('click', event => {
  // Handles the "add" button click event. Creates a shallow copy of the selected menu item to check if it exists in the order array. If it's not in the array, the item is added with a `quantity` attribute. If it already exists, its `quantity` is incremented, and the price is updated. Finally, the footer is re-rendered to reflect the changes.
  if (event.target.id === 'add') {
    const item = { ...menuArray.filter(item => item.id == event.target.dataset.id)[0] };
    const currentOrder = order.find(orderItem => orderItem.id === item.id);
    if (!currentOrder) {
      item.quantity = 1;
      order.push(item);
    } else {
      currentOrder.quantity++;
      currentOrder.price += item.price;
    }
    renderOrderTotalFooter();
  } 
  // Handles the "remove" button click event. If the item's `quantity` in the order array is greater than 1, it decreases the `quantity` and updates the price. If there's only one item, it removes it from the array. Finally, the render function is called to update the display.
  else if (event.target.id === 'remove') {
    const price = menuArray.filter(item => item.id == event.target.dataset.id)[0].price;
    const currentOrder = order.find(orderItem => orderItem.id == event.target.dataset.id);
    if (currentOrder.quantity > 1) {
      currentOrder.quantity--;
      currentOrder.price -= price;
    } else {
      order = order.filter(item => item.id != currentOrder.id)
    }
    renderOrderTotalFooter();
  }
  // Handles the "complete" button click event. Disables the "add" buttons and displays the payment popup.
  else if(event.target.id === 'complete') {
    const buttons = document.getElementsByTagName('button')
    for (let button of buttons) {
      if (button.id !== 'pay') {
        button.disabled = true;
      }
    }
    document.getElementById('payment-popup').style.display = "block"
  }
  // Handle 'pay' button click event. Hides payment popup and replaces order with message
  else if (event.target.id === 'pay') {
    const name = document.getElementById('form-name').value;
    const creditCard = document.getElementById('form-card-name').value;
    const cvv = document.getElementById('form-cvv').value;
    if (name && creditCard && cvv) {
      event.preventDefault();
      document.getElementById('payment-popup').style.display = "none"
      document.getElementById('footer').innerHTML = `<p class="message">Thanks, ${name}! Your order is on its way</p>`;
    }
  }
});

// Renders footer
function renderOrderTotalFooter() {
  let orderHtml = '';
  let total = 0;
  // If there is no items in the order array, it will remove the footer
  if (order.length === 0) {
    document.getElementById('footer').innerHTML = '';
  } else {
    order.forEach(item => {
      const { name, id, price, quantity} = item
      total += price;
      orderHtml += `
        <div class="footer-item-container">
          <div class="footer-item">
            <h4 class="item-title">${name} ${quantity > 1 ? `x${quantity}` : ''}</h3>
            <button class="remove-btn" id="remove" data-id="${id}" aria-label="Remove ${name}">remove</button>
          </div>
          <p class="item-price">$${price}</p>
        </div>
      `;
    });
  
    document.getElementById('footer').innerHTML = `
      <h3 class="footer-header">Your order</h3>
        <div id="items">
          ${orderHtml}
        </div>
        <div class="footer-separator"></div>
        <div class="footer-total">
          <h4 class="total-label">Total Price</h3>
          <p class="total-price" id="total-price">$${total}</p>
        </div>
        <button class="complete-btn" id="complete">Complete order</button>
    `;
  }
}