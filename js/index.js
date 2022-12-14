// I index.js hamnade mina (nästan) alla mina knappar. Funderade först på om jag skulle lagt knapparna i en egen modul men såg inte riktigt poängen med det i detta
// fallet. På detta sättet så blir det tydligt att det är härifrån programmet "körs". 

import { removeMoviesFromDom } from './modules/display.js'
import { saveMovie, manageSearch, getMovies } from './modules/firebase.js'

const movieNameInput  = document.querySelector('#movieNameInput')
const movieDateInput  = document.querySelector('#movieDateInput')
const movieGenreInput = document.querySelector('#movieGenreInput')
const submitBtn       = document.querySelector('#movieSubmit')
const searchBtn       = document.querySelector('#searchBtn')
const searchInput     = document.querySelector('#searchBar')
const showSavedBtn    = document.querySelector('#showSaved')
const backToSearch    = document.querySelectorAll('.backToSearch')
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
    saveMovie(movie);
})

function searchForMovie() {
    const searchValue = searchInput.value
    manageSearch(searchValue)
    console.log('nu körs toggleSeachBtnOn');
    toggleSearchBtnOff()
}

function toggleSearchBtnOn() {
    searchBtn.addEventListener('click', searchForMovie)
}
toggleSearchBtnOn()

function toggleSearchBtnOff() {
    searchBtn.removeEventListener('click', searchForMovie)
    console.log('nu körs togglesearchBtnoff');
}

showSavedBtn.addEventListener('click', () => {
    getMovies()
    toggleSearchBtnOff()
})

backToSearch.forEach((btn) => {
    btn.addEventListener('click', () => {
        removeMoviesFromDom()
        toggleSearchBtnOn()
    })
}) 




