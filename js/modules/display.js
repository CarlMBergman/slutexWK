const movieSection  = document.querySelector('#savedMoviesSection')
const searchSection = document.querySelector('#searchSection')

function showMovies(savedMovies) {
    savedMovies.forEach((savedMovie) => {
        const elem = `
        <article class="savedMovieArt" id="${savedMovie.data().Name}">
            <h1 class="savedMovieHead">${savedMovie.data().Name}</h1>
            <p class="savedMovieGenre">Genre: ${savedMovie.data().Genre}</p>
            <p class="savedMovieDate">Utgivnings datum: ${savedMovie.data().Date}</p>
            <button class="removeMovieBtn" movie-name="${savedMovie.data().Name}" data-movie-id="${savedMovie.id}">Ta bort filmen ifrån listan</button>
        </article>
        `
        movieSection.insertAdjacentHTML('beforeend', elem)
    });
}

async function displaySearch(movie) {
    const elem = `
    <article>
        <h1 class="savedMovieHead">${movie.data().Name}</h1>
        <p class="savedMovieGenre">Genre: ${movie.data().Genre}</p>
        <p class="savedMovieDate">Utgivnings datum: ${movie.data().Date}</p>
    </article>
    `

    searchSection.insertAdjacentHTML('beforeend', elem)
}
export { showMovies, displaySearch }