const omdbApiKey = '77a77099';
const moviesContainer = document.getElementById('movies');

document.getElementById('search-btn').addEventListener('click', () => {
  const searchTerm = document.getElementById('search').value;
  const searchBar = document.getElementById('search-bar');

  if (searchTerm) {
    searchBar.classList.remove('required');
    fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${searchTerm}&type=movie`)
      .then(res => res.json())
      .then(data => {
        document.getElementById('empty-list').classList.add('hidden');
        moviesContainer.innerHTML = '';
        for(let movie of data.Search) {
          fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${movie.imdbID}`)
            .then(res => res.json())
            .then(data => {
              buildMovieInfoHtml(data);
            });
        }
      });
  } else {
    searchBar.classList.add('required');
  }
})

function buildMovieInfoHtml(movie) {
  console.log('Missing Poster: ', movie.Title, ': ', movie.Poster)
  moviesContainer.innerHTML += `
    <section class="movie-info-container">
      <div class="poster-container">
        <img src="${movie.Poster === 'N/A' ? '' : movie.Poster}" alt="Poster for ${movie.Title}" />
      </div>
      <div class="movie-flex-container">
        <h2 class="title">${movie.Title}</h2>
        <div class="rating-container">
          <i class="fa-solid fa-star"></i>
          <p>${movie.Ratings.find(element => element.Source === 'Internet Movie Database').Value}</p>
        </div>
      </div>
      <div class="movie-grid-container">
        <p class="runtime">${movie.Runtime}</p>
        <p class="genre">${movie.Genre}</p>
        <div class="watchlist-container">
          <i class="fa-solid fa-plus plus-icon"></i>
          <p>Watchlist</p>
        </div>
      </div>
      <p class="plot">${movie.Plot}</p>
    </section>
  `;
}