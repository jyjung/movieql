import fetch from "node-fetch"; 
import Bluebird from "bluebird"
fetch.Promise = Bluebird;

let LocalMovies= []; 
const API_URL = "https://yts.mx/api/v2/list_movies.json"
export const getMovies = () => 
    fetch(API_URL)
    .then(res => res.json())
    .then(json => json.data.movies); 


    
