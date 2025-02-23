import { omdbApiKey } from '../assets/keys/api-keys.js';

document.getElementById('search-btn').addEventListener('click', () => {
  const searchTerm = document.getElementById('search').value;
  const searchBar = document.getElementById('search-bar');

  if (searchTerm) {
    searchBar.classList.remove('required');
    fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&s=${searchTerm}&type=movie`)
    .then(res => res.json())
    .then(data => {
      for(let movie of data.Search) {
        fetch(`http://www.omdbapi.com/?apikey=${omdbApiKey}&i=${movie.imdbID}`)
          .then(res => res.json())
          .then(data => console.log(data))
      }
    });
  } else {
    searchBar.classList.add('required');
  }
})