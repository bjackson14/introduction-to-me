const headerMenu = document.getElementById('header-menu');
const headerMenuBtn = document.getElementById('header-menu-btn');
const hamburgerMenuBtn = document.getElementById('hamburger-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');

let isHamburgerMenuClosed = false;

headerMenuBtn.addEventListener('click', () => {
  if (isHamburgerMenuClosed) {
    headerMenu.style.display = "none";
    hamburgerMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  } else {
    headerMenu.style.display = "block";
    hamburgerMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
  }
  isHamburgerMenuClosed = !isHamburgerMenuClosed;
})