const viewMoreBtn = document.getElementById('view-more-btn');

viewMoreBtn.addEventListener('click', () => {
  const articles = document.getElementsByTagName('article');

  for (let article of articles) {
    article.classList.remove('hidden');
  }
})