// Här har jag lagt det som skickar ut info och tar bort info ifrån min sida. Genom att lägga detta tillsammans så blir det en bra struktur,  
// jag behöver inte hämta mina sectioner mer än en gång och jag vet vart jag skriver ut infon.

const movieSection  = document.querySelector('#savedMoviesSection')
const searchSection = document.querySelector('#searchSection')

function showMovies(savedMovies) {
    movieSection.classList.toggle('hide')
    savedMovies.forEach((savedMovie) => {
        const movieName = savedMovie.data().Name
        const removedSpaces = movieName.replaceAll(' ', 'z').replaceAll(',', 'z').replaceAll('!', 'z').replaceAll('?', 'z').replaceAll('.', 'z')
        console.log(removedSpaces);
        const elem = `
        <article class="savedMovieArt" id="${removedSpaces}">
            <h1 class="savedMovieHead">${savedMovie.data().Name}</h1>
            <p class="savedMovieGenre">Genre: ${savedMovie.data().Genre}</p>
            <p class="savedMovieDate">Utgivnings datum: ${savedMovie.data().Date}</p>
            <button class="removeMovieBtn" movie-name="${removedSpaces}" data-movie-id="${savedMovie.id}">Ta bort filmen ifrån listan</button>
        </article>
        `
        movieSection.insertAdjacentHTML('afterbegin', elem)
    });
}

function removeMoviesFromDom() {
    const movieArticles = document.querySelectorAll('.savedMovieArt')
    movieArticles.forEach((article) => {
        article.remove()
    })
    movieSection.classList.add('hide')
    searchSection.classList.add('hide')
}

function displaySearch(movie) {
    searchSection.classList.toggle('hide')
    const movieName = movie.data().Name
    const removedSpaces = movieName.replaceAll(' ', 'z').replaceAll(',', 'z').replaceAll('!', 'z').replaceAll('?', 'z').replaceAll('.', 'z')
    const elem = `
    <article class="savedMovieArt" id="${removedSpaces}">
        <h1 class="savedMovieHead">${movie.data().Name}</h1>
        <p class="savedMovieGenre">Genre: ${movie.data().Genre}</p>
        <p class="savedMovieDate">Utgivnings datum: ${movie.data().Date}</p>
        <button class="removeMovieBtn" movie-name="${removedSpaces}" data-movie-id="${movie.id}">Ta bort filmen ifrån listan</button>
    </article>
    `

    searchSection.insertAdjacentHTML('afterbegin', elem)
}
export { showMovies, displaySearch, removeMoviesFromDom }