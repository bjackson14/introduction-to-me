const omdbApiKey = '77a77099';
const moviesContainer = document.getElementById('movies');
let movies = JSON.parse(localStorage.getItem('movies'));

export async function getMovies(searchTerm) {
  moviesContainer.innerHTML = '';
  const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${searchTerm}&type=movie`);
  const data = await response.json();
  return data;
}

export function getMovie(movieId) {
  fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${movieId}`)
    .then(res => res.json())
    .then(data => renderMovieInfoHtml(data));
}

// Uses the movie data to build the html and add an event listener to the watch list button
function renderMovieInfoHtml(movie) {
  const movieSection = document.createElement('section');

  movieSection.classList.add('movie-info-container');
  movieSection.innerHTML = `
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
        <i class="fa-solid ${movies && movies.includes(movie.imdbID) ? 'fa-minus' : 'fa-plus'} plus-icon" id="${movie.imdbID}"></i>
        <p>Watchlist</p>
      </div>
    </div>
    <p class="plot">${movie.Plot}</p>
  `;
  movieSection.querySelector('.watchlist-container').addEventListener('click', () => changeWatchList(movie.imdbID));
  moviesContainer.appendChild(movieSection);
}

// Adds or removes the movie to an array and stores it in local storage
function changeWatchList(movieId) {
  const iconClasses = document.getElementById(movieId).classList;

  // Adds the movie to array and changes class to minus icon
  if(iconClasses.contains('fa-plus')) {
    // If movies is falsey, then no movie list was found, so the array needs to be initilized
    if (!movies) {
      movies = [];
    }

    // Adds movie to list and changes icon
    movies.push(movieId);
    localStorage.setItem('movies', JSON.stringify(movies));
    iconClasses.remove('fa-plus');
    iconClasses.add('fa-minus');
  } else {

    // removes movie from list and changes icon
    movies = movies.filter(m => m.imdbID === movieId)
    localStorage.setItem('movies', JSON.stringify(movies));
    iconClasses.remove('fa-minus');
    iconClasses.add('fa-plus');
  }
}