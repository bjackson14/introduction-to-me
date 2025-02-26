import  {getMovie, getMovies } from './movie-service.js'

document.getElementById('search-btn').addEventListener('click', async () => {
  const searchTerm = document.getElementById('search').value;
  const searchBar = document.getElementById('search-bar');
  const emptyList = document.getElementById('empty-list');

  // If search term is truthy, then get a list of movies that matches where the title matches the search term
  if (searchTerm) {
    searchBar.classList.remove('required');
    const movies = await getMovies(searchTerm);
    if (movies.Response === "True") {
      emptyList.classList.add('hidden');
      for (let movie of movies.Search) {
        getMovie(movie.imdbID);
      }
    } else {
      // If movie is not found, change message on empty list screen
      const message = document.getElementById('message')
      message.textContent = `Couldn't find movie`;
      message.classList.add('not-found');
      emptyList.classList.remove('hidden');
    }
  } else {
    // if search term is falsey, then add a css class to inform user that information is required
    searchBar.classList.add('required');
  }
})