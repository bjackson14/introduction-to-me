const headerMenu = document.getElementById('header-menu');
const headerMenuBtn = document.getElementById('header-menu-btn');
const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
const closeMenuIcon = document.getElementById('close-menu-icon');
const copyright = document.getElementById('copyright');
const currentYear = new Date().getFullYear();

let isHamburgerMenuClosed = false;

headerMenuBtn.addEventListener('click', toggleMenu)
headerMenu.addEventListener('click', toggleMenu)

copyright.textContent = `Copyright ©${currentYear}`

function toggleMenu() {
  if (isHamburgerMenuClosed) {
    headerMenu.style.display = "none";
    hamburgerMenuIcon.style.display = "block";
    closeMenuIcon.style.display = "none";
  } else {
    headerMenu.style.display = "block";
    hamburgerMenuIcon.style.display = "none";
    closeMenuIcon.style.display = "block";
  }
  isHamburgerMenuClosed = !isHamburgerMenuClosed;
}