let pk = 0 
const getpk = () => {
    const tempkey = pk 
    pk += 1
    return tempkey
}


let Movies = [
    {
        id: getpk(),
        name: "Avatar",
        score: 99
    }, 
    {
        id: getpk(),
        name: "Avatar",
        score: 99
    },
    {
        id: getpk(),
        name: "Avatar",
        score: 99
    }
]; 

export const getMovies = () => Movies;   
export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id == id);
    return filteredMovies[0]; 
}

export const deleteMovie = id => {
    const cleanedMovies = Movies.filter(movie => movie.id != id); 
    if(Movies.length > cleanedMovies.length) {
        Movies = cleanedMovies; 
        return true; 
    } else {
        return false; 
    }
}

export const addMovie = (name , score) => {
    const newMovie = {
        id: getpk(),
        name,
        score
    }
    Movies.push(newMovie); 
    return newMovie;     
}