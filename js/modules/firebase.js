// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { hideDeletedMovie, showMovies } from "./display.js";

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
    try {
        await addDoc(collection(db, 'movies'), movie)
    } catch (error) {
        console.log(error);
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
            const articleId = `#${movieId}`
            document.querySelector(`${articleId}`).style.display = 'none'
            await removeMovie(movieId)
        })
    })
}

async function removeMovie(movieId) {
    try {
        await deleteDoc(doc(db, 'movies', movieId))
        hideDeletedMovie()
    } catch (error) {
        console.log(error);
    }
}

getMovies()

export { saveMovie }