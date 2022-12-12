import { saveMovie, manageSearch } from './modules/firebase.js'

const movieNameInput  = document.querySelector('#movieNameInput')
const movieDateInput  = document.querySelector('#movieDateInput')
const movieGenreInput = document.querySelector('#movieGenreInput')
const submitBtn       = document.querySelector('#movieSubmit')
const searchBtn       = document.querySelector('#searchBtn')
const searchInput     = document.querySelector('#searchBar')
let movie             = {
    Name: '',
    Genre: '',
    Date: ''
}

submitBtn.addEventListener('click', () => {
    movie.Name = movieNameInput.value
    movie.Date = movieDateInput.value
    movie.Genre = movieGenreInput.value
    console.log(movie);
    saveMovie(movie)
})

searchBtn.addEventListener('click', () => {
    const searchValue = searchInput.value
    manageSearch(searchValue)
})