import { getMovie } from './movie-service.js';

let movies = JSON.parse(localStorage.getItem('movies'));

if (movies && movies.length > 0) {
  for (let movie of movies) {
    getMovie(movie);
  }
}