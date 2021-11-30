//const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
    let directors = movies.map(({ director }) => director);
    return directors;
}
// const getAllDirectors = movies.map(function(movie){
//    return movie.director
// })
//const directors = movies.map(movie => movie.director)
//const directors = movies.map(({director}) => director)

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
    let moviesOfThisDirector = movies.filter((movie) => movie.director === director);
    return moviesOfThisDirector;
}
// let moviesOfThisDirector = movies.filter (function(movie) {
//   return movie.director === director
// })

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
    let directorsMovies = getMoviesFromDirector(movies, director)
    let directorsMoviesScores = directorsMovies.map(({ score }) => score)
    let totalScore = directorsMoviesScores.reduce((accumulatedScore, score) => {
        return accumulatedScore + score
    }, 0)
    let averageForDirector = totalScore / directorsMoviesScores.length
   
    return averageForDirector
}
    // Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
    let orderedMovies = [...movies].sort((thisMovie, nextMovie) => {
        if (thisMovie.title.toLowerCase() < nextMovie.title.toLowerCase())  return -1;
        if (thisMovie.title.toLowerCase() > nextMovie.title.toLowerCase())  return 1;
    });
    let orderedTitles = orderedMovies.map(({ title }) => title)
    let orderedFirst20 = orderedTitles.slice(0, 20)

    return orderedFirst20;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
    let sortedByYear = [...movies].sort((movie, otherMovie) => {
        if (movie.year === otherMovie.year) {
            if (movie.title.toLowerCase() < otherMovie.title.toLowerCase()) return -1;
            if (movie.title.toLowerCase() > otherMovie.title.toLowerCase()) return 1;
        }
        return movie.year - otherMovie.year
    })

    return sortedByYear
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
    // JUNTAR ELEMENTOS DE DISTINOS ARRAYS EN UNO SOLO CON REDUCE
    // let genres = movies.reduce((allGenres,movie) => {
    //     return Array.from(new Set([...allGenres, ...movie.genre]))
    // },[])
    let genres = movies.filter((movie) => movie.genre == genre && movie.score);
    //let scoreOfThisGenre = genres.map(({ score }) => score)

    let averageForGenre = genres.reduce((accumulatedScore, movie) => {
        return accumulatedScore + movie.score
    }, 0)

    let averageForCategory = Number((averageForGenre / genres.length).toFixed(2))
    return averageForCategory
}


//**NIVEL 2**//
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}






// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        getMoviesFromDirector,
        moviesAverageOfDirector,
        orderAlphabetically,
        orderByYear,
        moviesAverageByCategory,
        hoursToMinutes,
        bestFilmOfYear
    };
}