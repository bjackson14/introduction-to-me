const viewMoreBtn = document.getElementById('view-more-btn');
const copyright = document.getElementById('copyright');

viewMoreBtn.addEventListener('click', () => {
  const articles = document.getElementsByTagName('article');

  for (let article of articles) {
    article.classList.remove('hidden');
  }
});

copyright.textContent = `Copyright ©${new Date().getFullYear()}`