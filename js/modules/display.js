const movieSection = document.querySelector('#savedMoviesSection')

function showMovies(savedMovies) {
    savedMovies.forEach((savedMovie) => {
        const elem = `
        <article class="savedMovieArt" id="${savedMovie.id}">
            <h1 class="savedMovieHead">${savedMovie.data().Name}</h1>
            <p class="savedMovieGenre">Genre: ${savedMovie.data().Genre}</p>
            <p class="savedMovieDate">Utgivnings datum: ${savedMovie.data().Date}</p>
            <button class="removeMovieBtn" data-movie-id="${savedMovie.id}">Ta bort filmen ifrån listan</button>
        </article>
        `
        movieSection.insertAdjacentHTML('beforeend', elem)
    });
}

function hideDeletedMovie() {

}

export { showMovies, hideDeletedMovie }