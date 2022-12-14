// Allt som hade med firebase att göra la jag i en modul eftersom jag kommer behöva komma åt databasen i dom flesta funktionerna. Undantaget är för managesearch
// och removeClick. Manage search tycker jag är rätt så naturligt att den ligger i denna modulen eftersom det den gör är att hantera saker ifrån databasen. 
// removeClick var jag lite mer osäker på, den hade absolut kunnat vara med dom andra clicken i index.js för att göra det tydligare att alla klick funktioner
// finns på ett ställe. Men om jag skulle flytta den så hade jag ändå behövt (med tanke på hur jag byggt min sida) exportera tillbaka funktionen hit till 
// firebase.js och även exportera removeMovie till index.js. Vilket jag tyckte kändes onödigt.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { showMovies, displaySearch } from "./display.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvvBT6tdaIPSAHks7DM_QLDfFQyIHPk74",
  authDomain: "slutexwk.firebaseapp.com",
  projectId: "slutexwk",
  storageBucket: "slutexwk.appspot.com",
  messagingSenderId: "504288374922",
  appId: "1:504288374922:web:f1ed6dd0cd705c6bbdbd73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

async function saveMovie(movie) {
    if (movie.Name == '') {
        alert('Skriv in filmens namn!')
    }
    else if(movie.Genre == '') {
        alert('Skriv in filmens genre!')
    }
    else if (movie.Date == '') {
        alert('Skriv in när filmen släpptes!')
    }
    else {
        try {
            await addDoc(collection(db, 'movies'), movie)
        } catch (error) {
            console.log(error);
        }
    }
}

async function getMovies() {
    const savedMovies = await getDocs(collection(db, 'movies'));

    showMovies(savedMovies)
    removeClick()
}

function removeClick() {
    const removeBtn = document.querySelectorAll('.removeMovieBtn')

    removeBtn.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
            const movieId = event.target.getAttribute('data-movie-id');
            const articleId = event.target.getAttribute('movie-name')
            document.querySelector(`#${articleId}`).style.display = 'none'
            await removeMovie(movieId)
        })
    })
}

async function removeMovie(movieId) {
    try {
        await deleteDoc(doc(db, 'movies', movieId))
    } catch (error) {
        console.log(error);
    }
}

async function searchMovie(searchValue) {
    try {
        const movieNameQuery = query(collection(db, 'movies'), where('Name', '==', searchValue));
        const result = await getDocs(movieNameQuery)
        let resultMovie = {};

        result.forEach((movieValue) => {
            resultMovie = movieValue;
        })
        return resultMovie
    } catch (error) {
        console.log(error);
    }
}

async function manageSearch(searchValue) {
    const movieName = await searchMovie(searchValue)
    const movieId = movieName.id
    if (movieId) {
        console.log(movieName.data().Genre);
        displaySearch(movieName)
        removeClick()
    } else {
        alert('Du har ingen sparad film med detta namn!')
    }
}



export { saveMovie, manageSearch, getMovies }