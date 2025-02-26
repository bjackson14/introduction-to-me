const omdbApiKey = '77a77099';
const moviesContainer = document.getElementById('movies');
let movies = JSON.parse(localStorage.getItem('movies'));

export async function getMovies(searchTerm) {
  moviesContainer.innerHTML = '';
  const response = await fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${searchTerm}&type=movie`);
  const data = await response.json();
  return data;
}

export function getMovie(movieId, callback) {
  fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${movieId}`)
    .then(res => res.json())
    .then(data => callback(data));
}