// in minibee
const fetch = require('node-fetch');
const Bluebird = require('bluebird');
fetch.Promise = Bluebird;

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
const result = words.filter( function(word) { 
    if  (word.length > 6) {
        return word; 
    }
});

myf = (name , score ) => {

    const temp = {
        name,
        score
    }
    console.log('assembled temp ' ,temp)
}

// console.log(result);
myf( "jung" ,  99 ); 
// expected output: Array ["exuberant", "destruction", "present"]


const API_URL = "https://yts.mx/api/v2/list_movies.json"
/*
const { URLSearchParams } = require('url');
const params = new URLSearchParams();
params.append('limit', 50);
params.append('minimum_rating', 9);
fetch(API_URL, { method: 'GET', header: params })
    .then(res => res.json())
    .then(json => console.log(json));
*/

fetch(API_URL)
    .then(res => res.json())
    .then(json => console.log(json)); 


