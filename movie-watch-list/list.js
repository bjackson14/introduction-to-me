import { getMovie } from './movie-service.js';

const moviesContainer = document.getElementById('movies');
let movies = JSON.parse(localStorage.getItem('movies'));

renderWachList();

function renderWachList() {
  moviesContainer.innerHTML = '';
  if (movies && movies.length > 0) {
    document.getElementById('empty-list').classList.add('hidden');
    for (let movie of movies) {
      getMovie(movie, renderMovieInfoHtml);
    }
  }
}

// Uses the movie data to build the html and add an event listener to the watch list button
function renderMovieInfoHtml(movie) {
  const movieSection = document.createElement('section');

  movieSection.classList.add('movie-container');
  movieSection.innerHTML = `
    <div class="poster-container">
      <img src="${movie.Poster === 'N/A' ? '' : movie.Poster}" alt="Poster for ${movie.Title}" />
    </div>
    <div class="movie-info-container">
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
          <i class="fa-solid fa-minus" id="${movie.imdbID}"></i>
          <p>Remove</p>
        </div>
      </div>
      <p class="plot">${movie.Plot}</p>
    </div>
  `;
  movieSection.querySelector('.watchlist-container').addEventListener('click', () => changeWatchList(movie.imdbID));
  moviesContainer.appendChild(movieSection);
}

// Adds or removes the movie to an array and stores it in local storage
function changeWatchList(movieId) {
  // removes movie from list and re-renders list
  movies = movies.filter(id => id !== movieId);
  localStorage.setItem('movies', JSON.stringify(movies));
  document.getElementById('empty-list').classList.remove('hidden');
  renderWachList();
}