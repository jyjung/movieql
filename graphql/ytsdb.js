import fetch from "node-fetch"; 
import Bluebird from "bluebird"
fetch.Promise = Bluebird;

let LocalMovies= []; 
const API_URL = "https://yts.mx/api/v2/list_movies.json"
export const getMovies = () => 
    fetch(API_URL)
    .then(res => res.json())
    .then(json => json.data.movies); 



export const findMoviesFromTitle = title => {
    let REQUEST_URL = API_URL + '?'
    REQUEST_URL += 'query_term=' + title
    console.log(REQUEST_URL)

    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies); 
}



    
