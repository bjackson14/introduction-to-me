const colorBtn = document.getElementById('color-btn');
const colorInput = document.getElementById('color-input');
const modeSelect = document.getElementById('mode-select');
const colorGrid = document.getElementById('color-grid');

colorBtn.addEventListener('click', () => {
  const color = colorInput.value.slice(1);

  colorGrid.innerHTML = '';
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${modeSelect.value}&count=5`)
    .then(res => res.json())
    .then(data => {
      data.colors.forEach(color => {
        addColorToContainer(color.hex.value);
      });
    });
});

function addColorToContainer(color) {
  const colorContainer = document.createElement('div');
  const colorDiv = document.createElement('div');
  const hexCode = document.createElement('div');

  colorContainer.classList.add('color-container')

  colorDiv.classList.add('color')
  colorDiv.style.backgroundColor = color;

  hexCode.classList.add('hex-code')
  hexCode.textContent = color;

  colorContainer.appendChild(colorDiv);
  colorContainer.appendChild(hexCode);
  colorGrid.appendChild(colorContainer);
}