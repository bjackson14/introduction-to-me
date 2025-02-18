const colorBtn = document.getElementById('color-btn');
const colorInput = document.getElementById('color-input');
const modeSelect = document.getElementById('mode-select');

colorBtn.addEventListener('click', event => {
  let color = colorInput.value.slice(1);
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${modeSelect.value}&count=5`)
    .then(res => res.json())
    .then(data => console.log(data));
});